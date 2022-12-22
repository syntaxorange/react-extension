import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [url, setUrl] = useState('');

    /**
     * Get current URL
     */
  useEffect(async () => {
    const queryInfo = {active: true, lastFocusedWindow: true};

    const tabs = await chrome.tabs.query(queryInfo);
    const url = tabs[0].url;
    setUrl(url);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>URL:</p>
        <p>
          {url}
        </p>
      </header>
    </div>
  );
}

export default App;
