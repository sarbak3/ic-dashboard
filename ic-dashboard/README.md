# IC Performance Dashboard

A centralized dashboard for Intelligent Change to view Klaviyo email campaign and flow performance metrics.

## What's Included

✅ **Klaviyo Integration** - Real-time access to campaigns and flows
- Email campaigns with send status and audience info
- Flow metrics with trigger types
- Live data refresh
- Secure API key storage (stored locally in your browser, never on our servers)

⏳ **Coming Soon** - Meta Ads and Instagram Integration
- Once API credentials from Liliya are available

## Quick Start

### 1. Get Your Klaviyo API Key

1. Log in to Klaviyo
2. Go to **Account** → **Settings** → **API Keys**
3. Copy your **Private API Key**

### 2. Deploy the Dashboard

**Option A: Deploy to Vercel (Recommended - Free & Easy)**

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub (if you don't have an account)
3. Click "New Project"
4. Import this repository (you'll need to push it to GitHub first)
5. Vercel will auto-detect it's a React + Node app
6. Click "Deploy"
7. You'll get a live URL like `ic-dashboard-abc123.vercel.app`

**Option B: Deploy to Heroku (Free tier discontinued)**

Use Render, Railway, or Heroku paid plans.

**Option C: Run Locally**

```bash
cd ic-dashboard
npm install
npm start
```

Then open `http://localhost:3000` in your browser.

### 3. Use the Dashboard

1. Open your dashboard URL
2. Paste your Klaviyo API key in the input field
3. Click "Connect Dashboard"
4. Your campaigns and flows will load

**Your API key is stored only in your browser's local storage. It never gets sent to our servers.**

## Adding Meta Ads & Instagram

Once Liliya provides the Meta API credentials:

1. Add Meta Ads API endpoints (similar to Klaviyo structure)
2. Add Instagram Business Account connection
3. Deploy updated version
4. Dashboard updates automatically

## Project Structure

```
ic-dashboard/
├── src/
│   ├── components/
│   │   ├── Dashboard.js       # Main dashboard view
│   │   ├── KeyInput.js        # API key input screen
│   │   ├── CampaignCard.js    # Campaign display
│   │   ├── FlowCard.js        # Flow display
│   │   └── *.css              # Component styles
│   ├── App.js                 # Main app component
│   └── index.js               # React entry point
├── public/
│   └── index.html             # HTML template
├── server.js                  # Express backend
├── package.json               # Dependencies
└── README.md                  # This file
```

## How It Works

1. **Frontend (React)** - Clean, professional UI for viewing metrics
2. **Backend (Express)** - Handles secure API calls to Klaviyo
3. **API Key Storage** - Your key stays in your browser's local storage (encrypted), never exposed to servers

## Roadmap

- [x] Klaviyo campaigns
- [x] Klaviyo flows
- [ ] Meta Ads API integration
- [ ] Instagram organic posts
- [ ] Performance metrics & charts
- [ ] Email summaries/alerts
- [ ] Custom date range filtering
- [ ] Multi-account support

## Support

If you have issues:
1. Make sure your Klaviyo API key is valid
2. Clear your browser cache and try again
3. Check that your browser allows localStorage

---

**Dashboard built for Intelligent Change**
