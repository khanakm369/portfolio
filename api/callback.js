// api/callback.js
const express = require('express');
const axios = require('axios');
const cookieParser = require('cookie-parser');
const querystring = require('querystring');
const app = express();
app.use(cookieParser());

app.get('/api/callback', async (req, res) => {
  const code = req.query.code || null;
  const state = req.query.state || null;
  const storedState = req.cookies ? req.cookies.spotify_auth_state : null;

  // 1. Security check: Verify state
  if (state === null || state !== storedState) {
    return res.redirect('/#' + querystring.stringify({ error: 'state_mismatch' }));
  }

  // Clear the state cookie
  res.clearCookie('spotify_auth_state');

  // 2. Prepare for Token Exchange (using Basic Authorization)
  const authHeader = Buffer.from(
    `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
  ).toString('base64');

  try {
    const response = await axios({
      method: 'post',
      url: 'https://accounts.spotify.com/api/token',
      data: querystring.stringify({
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: process.env.SPOTIFY_REDIRECT_URI,
      }),
      headers: {
        'Authorization': `Basic ${authHeader}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    const { access_token, refresh_token, expires_in } = response.data;

    // 3. CRITICAL: Securely store the refresh_token. 
    // For a personal Vercel app, you would typically update a persistent secret on Vercel 
    // (like SPOTIFY_REFRESH_TOKEN) using the Vercel CLI, or a simple database.
    // For now, we'll store it in a cookie for development, but THIS IS NOT SECURE FOR PRODUCTION
    // (We'll assume you'll replace this with a secure server-side store later)
    res.cookie('spotify_refresh_token', refresh_token, { httpOnly: true, secure: true, maxAge: 365 * 24 * 60 * 60 * 1000 }); // 1 year

    // 4. Redirect back to your React app, passing the access token (for immediate use)
    res.redirect(`/#/spotify?` + querystring.stringify({ access_token, expires_in }));

  } catch (error) {
    res.send('Failed to exchange token.');
  }
});

// Vercel requires the function to be exported
module.exports = app;