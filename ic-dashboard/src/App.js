import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Dashboard from './components/Dashboard';
import KeyInput from './components/KeyInput';
import './App.css';

function App() {
  const [apiKey, setApiKey] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check if API key is stored in localStorage
    const storedKey = localStorage.getItem('klaviyo_api_key');
    if (storedKey) {
      setApiKey(storedKey);
      setIsAuthenticated(true);
    }
  }, []);

  const handleKeySubmit = async (key) => {
    setLoading(true);
    setError(null);
    try {
      // Test the API key by making a simple request
      await axios.post('/api/campaigns', { apiKey: key });
      localStorage.setItem('klaviyo_api_key', key);
      setApiKey(key);
      setIsAuthenticated(true);
    } catch (err) {
      setError('Invalid API key. Please check and try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('klaviyo_api_key');
    setApiKey(null);
    setIsAuthenticated(false);
  };

  return (
    <div className="app">
      {!isAuthenticated ? (
        <KeyInput onSubmit={handleKeySubmit} loading={loading} error={error} />
      ) : (
        <Dashboard apiKey={apiKey} onLogout={handleLogout} />
      )}
    </div>
  );
}

export default App;
