import React, { useState } from 'react';
import './KeyInput.css';

function KeyInput({ onSubmit, loading, error }) {
  const [key, setKey] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (key.trim()) {
      onSubmit(key);
    }
  };

  return (
    <div className="key-input-container">
      <div className="key-input-box">
        <div className="header">
          <h1>Intelligent Change</h1>
          <p>Performance Dashboard</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="api-key">Klaviyo API Key</label>
            <input
              id="api-key"
              type="password"
              placeholder="Paste your Klaviyo API key"
              value={key}
              onChange={(e) => setKey(e.target.value)}
              disabled={loading}
            />
            <small>Your key is stored locally in your browser and never sent to our servers.</small>
          </div>

          {error && <div className="error-message">{error}</div>}

          <button type="submit" disabled={loading || !key.trim()}>
            {loading ? 'Connecting...' : 'Connect Dashboard'}
          </button>
        </form>

        <div className="info-box">
          <h3>Where to find your API key:</h3>
          <ol>
            <li>Log in to Klaviyo</li>
            <li>Go to Account → Settings → API Keys</li>
            <li>Copy your Private API Key</li>
            <li>Paste it above</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default KeyInput;
