
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import PerformanceMonitor from './components/performance/PerformanceMonitor';

const container = document.getElementById("root");

if (!container) {
  console.error('Root container not found');
} else {
  const root = createRoot(container);
  
  root.render(
    <React.StrictMode>
      <App />
      <PerformanceMonitor showInDev={true} />
    </React.StrictMode>
  );
}
