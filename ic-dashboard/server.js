const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Test API key
app.post('/api/test-key', async (req, res) => {
  const { apiKey } = req.body;
  try {
    const response = await axios.get(
      `https://a.klaviyo.com/api/v1/campaigns?api_key=${apiKey}`
    );
    res.json({ success: true });
  } catch (error) {
    res.status(401).json({ success: false });
  }
});

// Get campaigns
app.post('/api/campaigns', async (req, res) => {
  const { apiKey } = req.body;
  try {
    const response = await axios.get(
      `https://a.klaviyo.com/api/v1/campaigns?api_key=${apiKey}`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch campaigns' });
  }
});

// Get flows
app.post('/api/flows', async (req, res) => {
  const { apiKey } = req.body;
  try {
    const response = await axios.get(
      `https://a.klaviyo.com/api/v1/flows?api_key=${apiKey}`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch flows' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
