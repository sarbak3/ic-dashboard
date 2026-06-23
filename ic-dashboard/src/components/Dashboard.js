import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CampaignCard from './CampaignCard';
import FlowCard from './FlowCard';
import './Dashboard.css';

function Dashboard({ apiKey, onLogout }) {
  const [campaigns, setCampaigns] = useState([]);
  const [flows, setFlows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(new Date());

  useEffect(() => {
    fetchData();
  }, [apiKey]);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const [campaignsRes, flowsRes] = await Promise.all([
        axios.post('/api/campaigns', { apiKey }),
        axios.post('/api/flows', { apiKey })
      ]);

      setCampaigns(campaignsRes.data.data || []);
      setFlows(flowsRes.data.data || []);
      setLastUpdated(new Date());
    } catch (err) {
      setError('Failed to fetch data. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = () => {
    fetchData();
  };

  if (loading) {
    return (
      <div className="dashboard">
        <div className="loading">Loading dashboard...</div>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="header-content">
          <div>
            <h1>Intelligent Change Dashboard</h1>
            <p className="subtitle">Klaviyo Performance Metrics</p>
          </div>
          <div className="header-actions">
            <button onClick={handleRefresh} className="refresh-btn">
              ↻ Refresh
            </button>
            <button onClick={onLogout} className="logout-btn">
              Disconnect
            </button>
          </div>
        </div>
        <div className="header-meta">
          Last updated: {lastUpdated.toLocaleTimeString()}
        </div>
      </header>

      {error && <div className="error-banner">{error}</div>}

      <main className="dashboard-content">
        <section className="dashboard-section">
          <div className="section-header">
            <h2>📧 Email Campaigns</h2>
            <span className="count">{campaigns.length} campaigns</span>
          </div>
          {campaigns.length === 0 ? (
            <div className="empty-state">No campaigns found</div>
          ) : (
            <div className="cards-grid">
              {campaigns.map(campaign => (
                <CampaignCard key={campaign.id} campaign={campaign} />
              ))}
            </div>
          )}
        </section>

        <section className="dashboard-section">
          <div className="section-header">
            <h2>🔄 Flows</h2>
            <span className="count">{flows.length} flows</span>
          </div>
          {flows.length === 0 ? (
            <div className="empty-state">No flows found</div>
          ) : (
            <div className="cards-grid">
              {flows.map(flow => (
                <FlowCard key={flow.id} flow={flow} />
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
