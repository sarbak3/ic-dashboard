import React from 'react';
import './Card.css';

function CampaignCard({ campaign }) {
  const getStatusColor = (status) => {
    switch(status) {
      case 'Sent':
        return '#10b981';
      case 'Sending':
        return '#3b82f6';
      case 'Scheduled':
        return '#f59e0b';
      case 'Draft':
        return '#9ca3af';
      default:
        return '#6b7280';
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="card">
      <div className="card-header">
        <h3>{campaign.name || 'Untitled Campaign'}</h3>
        <span className="status" style={{ backgroundColor: getStatusColor(campaign.status) }}>
          {campaign.status || 'Unknown'}
        </span>
      </div>

      <div className="card-meta">
        <div className="meta-item">
          <span className="label">Sent</span>
          <span className="value">{formatDate(campaign.send_time)}</span>
        </div>
      </div>

      {campaign.lists && campaign.lists.length > 0 && (
        <div className="card-section">
          <h4>Audiences</h4>
          <div className="audience-list">
            {campaign.lists.map(list => (
              <span key={list} className="audience-badge">{list}</span>
            ))}
          </div>
        </div>
      )}

      <div className="card-footer">
        <small>Campaign ID: {campaign.id}</small>
      </div>
    </div>
  );
}

export default CampaignCard;
