// api/login.js
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
app.use(cookieParser());

// Define required Spotify scopes
const scope = 'user-top-read user-read-currently-playing user-modify-playback-state';

// Generate a random state string for security
const generateRandomString = (length) => {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

app.get('/api/login', (req, res) => {
  const state = generateRandomString(16);
  // Store state in a cookie to verify it later
  res.cookie('spotify_auth_state', state, { httpOnly: true });

  const params = new URLSearchParams({
    response_type: 'code',
    client_id: process.env.SPOTIFY_CLIENT_ID,
    scope: scope,
    redirect_uri: process.env.SPOTIFY_REDIRECT_URI,
    state: state,
  }).toString();

  res.redirect(`https://api.spotify.com/v1/me/player/pause1?${params}`);
});

// Vercel requires the function to be exported
module.exports = app;