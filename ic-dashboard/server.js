const express = require('express');
const cors = require('cors');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Serve static files from React build
app.use(express.static(path.join(__dirname, 'build')));

// Helper function to make Klaviyo API calls
async function makeKlaviyoRequest(endpoint, apiKey) {
  try {
    const response = await axios.get(
      `https://a.klaviyo.com/api/v1${endpoint}?api_key=${apiKey}`
    );
    return response.data;
  } catch (error) {
    console.error('Klaviyo API error:', error.message);
    throw error;
  }
}

// API endpoint: Get campaigns
app.post('/api/campaigns', async (req, res) => {
  const { apiKey } = req.body;
  try {
    const data = await makeKlaviyoRequest('/campaigns', apiKey);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch campaigns' });
  }
});

// API endpoint: Get flows
app.post('/api/flows', async (req, res) => {
  const { apiKey } = req.body;
  try {
    const data = await makeKlaviyoRequest('/flows', apiKey);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch flows' });
  }
});

// API endpoint: Get campaign details (for metrics)
app.post('/api/campaign/:id', async (req, res) => {
  const { apiKey } = req.body;
  const { id } = req.params;
  try {
    const data = await makeKlaviyoRequest(`/campaigns/${id}`, apiKey);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch campaign details' });
  }
});

// Catch-all for React routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
