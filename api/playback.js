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
    
    // Check for the access token
    const token = req.cookies.spotify_access_token;
    if (!token) {
        return res.status(401).json({ error: 'Authorization required. No token found.' });
    }
    
    // Expecting body: { action: 'stop' } or { action: 'start', uri: 'spotify:track:...' }
    const { action, uri } = req.body;
    let url = '';
    let method = 'put'; 
    let data = {};

    if (action === 'stop') {
        url = 'https://api.spotify.com/v1/me/player/pause';
    } else if (action === 'start' && uri) {
        url = 'https://api.spotify.com/v1/me/player/play';
        // Spotify requires 'uris' key with an array of track URIs
        data = { uris: [uri] }; 
    } else {
        return res.status(400).json({ error: 'Invalid action or missing track URI for playback.' });
    }

    try {
        await axios({
            method: method,
            url: url,
            headers: { 
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json' 
            },
            data: data
        });

        // Spotify returns 204 No Content on successful command, 
        // so we return 200 OK to the frontend.
        return res.status(200).json({ message: `${action} command sent successfully.` });

    } catch (error) {
        console.error('Playback failed:', error.response?.data || error.message);
        // Common errors here are 404 (No active device) or 403 (Premium required for full control)
        return res.status(error.response?.status || 500).json({ 
            error: 'Failed to control playback. Ensure the Spotify app is open and a device is active.', 
            details: error.response?.data 
        });
    }
};