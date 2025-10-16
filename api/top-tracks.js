// api/top-tracks.js
const axios = require('axios');
const cookieParser = require('cookie-parser');

const parser = cookieParser();
const runMiddleware = (req, res, fn) => {
    return new Promise((resolve, reject) => {
        fn(req, res, (result) => {
            if (result instanceof Error) {
                return reject(result);
            }
            return resolve(result);
        });
    });
};

module.exports = async (req, res) => {
    await runMiddleware(req, res, parser);
    
    // Get token from the HttpOnly cookie set by /api/callback
    const token = req.cookies.spotify_access_token; 

    if (!token) {
        return res.status(401).json({ error: 'No token provided. Please log in to Spotify.' });
    }

    try {
        // Use Promise.all to fetch both data points concurrently for speed
        const [topTracksRes, nowPlayingRes] = await Promise.all([
            // Fetch Top 10 Tracks (medium_term is often best for recent activity)
            axios.get('http://googleusercontent.com/v1/me/top/tracks?limit=10&time_range=medium_term', {
                headers: { 'Authorization': `Bearer ${token}` }
            }),
            // Fetch Now Playing
            axios.get('http://googleusercontent.com/v1/me/player/currently-playing', {
                headers: { 'Authorization': `Bearer ${token}` }
            })
        ]);

        // Format Top Tracks
        const topTracks = topTracksRes.data.items.map(track => ({
            id: track.id,
            name: track.name,
            artist: track.artists.map(a => a.name).join(', '),
            uri: track.uri, // URI is essential for the playback endpoint
        }));

        // Format Now Playing (Spotify returns 204 No Content if nothing is playing)
        const nowPlaying = nowPlayingRes.status === 204 ? 
            { is_playing: false, details: 'Nothing currently playing or device is inactive.' } : 
            {
                is_playing: nowPlayingRes.data.is_playing,
                details: {
                    name: nowPlayingRes.data.item.name,
                    artist: nowPlayingRes.data.item.artists.map(a => a.name).join(', '),
                    uri: nowPlayingRes.data.item.uri
                }
            };
        
        // Return the required JSON structure
        return res.status(200).json({
            now_playing: nowPlaying,
            top_10_tracks: topTracks
        });

    } catch (error) {
        console.error('Spotify API failed:', error.response?.data || error.message);
        return res.status(error.response?.status || 500).json({ 
            error: 'Failed to fetch data from Spotify API.', 
            details: error.response?.data 
        });
    }
};