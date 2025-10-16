const axios = require('axios');
const querystring = require('querystring');
const cookieParser = require('cookie-parser');

// Helper to manually run cookie-parser middleware in Vercel's handler format
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
    // 1. Apply middleware to read cookies (for state verification)
    await runMiddleware(req, res, parser); 

    const code = req.query.code || null;
    const state = req.query.state || null;
    // Read the state cookie set in api/login.js
    const storedState = req.cookies ? req.cookies.spotify_auth_state : null;
    
    // --- STATE VERIFICATION (Security Check) ---
    if (state === null || state !== storedState) {
        // Clear the state cookie and redirect on mismatch
        res.setHeader('Set-Cookie', 'spotify_auth_state=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0');
        // Redirect back to the frontend with a failure status
        return res.redirect(`/spotify?status=failure&reason=state_mismatch`);
    }

    // Clear the state cookie after successful verification
    res.setHeader('Set-Cookie', 'spotify_auth_state=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0');

    // --- TOKEN EXCHANGE (Server-to-Server Request) ---
    try {
        const tokenResponse = await axios({
            method: 'post',
            url: 'https://accounts.spotify.com/api/token',
            data: querystring.stringify({
                grant_type: 'authorization_code',
                code: code,
                // CRITICAL: Must match the URI used in /api/login and the Spotify Dashboard
                redirect_uri: process.env.SPOTIFY_REDIRECT_URI 
            }),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                // Authorization header uses Base64 encoding of CLIENT_ID:CLIENT_SECRET
                'Authorization': 'Basic ' + Buffer.from(
                    process.env.SPOTIFY_CLIENT_ID + ':' + process.env.SPOTIFY_CLIENT_SECRET
                ).toString('base64')
            }
        });

        const { access_token, refresh_token, expires_in } = tokenResponse.data;
        
        // --- TOKEN STORAGE (HttpOnly Cookies) ---
        // Access Token (short-lived, 1 hour)
        res.setHeader(
            'Set-Cookie', 
            `spotify_access_token=${access_token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${expires_in}`
        );
        
        // Refresh Token (long-lived, used for renewing tokens later)
        // Max-Age=2592000 is approximately 30 days
        res.appendHeader(
            'Set-Cookie', 
            `spotify_refresh_token=${refresh_token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=2592000` 
        );

        // --- FINAL REDIRECT ---
        // Redirect back to the frontend (e.g., your portfolio page) to handle the success status
        res.redirect(`/spotify?status=success`);

    } catch (error) {
        console.error('Token exchange failed:', error.response?.data || error.message);
        res.redirect(`/spotify?status=failure&reason=token_exchange`);
    }
};
