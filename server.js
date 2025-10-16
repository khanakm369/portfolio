// --- CRITICAL FIX: Load environment variables from .env file ---
require('dotenv').config(); 

const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8888; 

// Middleware for handling JSON data (required for /api/playback)
app.use(express.json()); 
// Middleware for handling cookies (required for auth state and tokens)
app.use(cookieParser());

// Simple root route to avoid "Cannot GET /" error when hitting localhost:8888
app.get('/', (req, res) => {
  res.send('Spotify API Backend is running. Access /api/login to start the OAuth flow.');
});

// --- Map Vercel Serverless Functions to Express Routes ---
// Note: These paths assume you have the respective files in an 'api' subdirectory
app.get('/api/login', require('./login'));
app.get('/api/callback', require('./callback'));
app.get('/api/top-tracks', require('./top-tracks'));
app.post('/api/playback', require('./playback')); 

app.listen(port, () => {
  console.log(`API Server listening at http://localhost:${port}`);
  console.log('To start login flow, visit: http://localhost:8888/api/login');
});