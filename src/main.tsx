
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Wait for DOM content loaded before mounting React
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById("root");
  
  if (container) {
    // Use createRoot API for concurrent mode
    const root = createRoot(container);
    
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }
});
