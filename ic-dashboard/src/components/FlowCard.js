import React from 'react';
import './Card.css';

function FlowCard({ flow }) {
  const getStatusColor = (status) => {
    switch(status) {
      case 'Active':
        return '#10b981';
      case 'Draft':
        return '#9ca3af';
      case 'Inactive':
        return '#ef4444';
      default:
        return '#6b7280';
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="card">
      <div className="card-header">
        <h3>{flow.name || 'Untitled Flow'}</h3>
        <span className="status" style={{ backgroundColor: getStatusColor(flow.status) }}>
          {flow.status || 'Unknown'}
        </span>
      </div>

      <div className="card-meta">
        {flow.trigger_type && (
          <div className="meta-item">
            <span className="label">Trigger</span>
            <span className="value">{flow.trigger_type}</span>
          </div>
        )}
        <div className="meta-item">
          <span className="label">Created</span>
          <span className="value">{formatDate(flow.created_at)}</span>
        </div>
      </div>

      <div className="card-footer">
        <small>Flow ID: {flow.id}</small>
      </div>
    </div>
  );
}

export default FlowCard;
