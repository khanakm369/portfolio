const querystring = require('querystring');

// Define required Spotify scopes for all tasks
const SCOPES = [
    'user-read-private',
    'user-read-email',
    'user-top-read',          // REQUIRED for Top 10 tracks
    'user-read-currently-playing', // REQUIRED for Now Playing
    'user-modify-playback-state'  // REQUIRED for Start/Stop playback
].join(' ');

// Generates a random state string for security
const generateRandomString = (length) => {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
};

// Vercel Serverless Function Export: Handles the /api/login request
module.exports = (req, res) => {
    // 1. Generate unique state for CSRF protection
    const state = generateRandomString(16);
    
    // 2. Set the state in an HttpOnly cookie for security verification in the callback
    // The Path=/ ensures the cookie is sent back to all /api endpoints.
    res.setHeader(
        'Set-Cookie', 
        `spotify_auth_state=${state}; Path=/; HttpOnly; SameSite=Lax; Max-Age=3600`
    );

    // 3. Prepare parameters for the Spotify authorization URL
    const params = querystring.stringify({
        response_type: 'code',
        // Use client ID from environment variables
        client_id: process.env.SPOTIFY_CLIENT_ID, 
        scope: SCOPES,
        // Use redirect URI from environment variables (must match dashboard)
        redirect_uri: process.env.SPOTIFY_REDIRECT_URI, 
        state: state,
    });

    // 4. Redirect user to the CORRECT Spotify authorization URL
    // CRITICAL FIX: The base URL must be 'https://accounts.spotify.com/authorize'
    res.redirect(`https://accounts.spotify.com/authorize?${params}`);
};
