
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Performance mark for app initialization
performance.mark('app-init-start');

// Optimize startup performance
const initializeApp = () => {
  const container = document.getElementById("root");
  
  if (!container) {
    console.error('Root container not found');
    return;
  }

  // Use createRoot API for concurrent mode with optimizations
  const root = createRoot(container, {
    // Enable concurrent features for better performance
    unstable_concurrentUpdatesByDefault: true
  });
  
  // Mark before React render
  performance.mark('react-render-start');
  
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  
  // Mark after initial render
  performance.mark('react-render-end');
  
  // Log performance metrics in development
  if (process.env.NODE_ENV === 'development') {
    setTimeout(() => {
      const appInitTime = performance.measure('app-init', 'app-init-start', 'react-render-end');
      console.log(`App initialization took: ${appInitTime.duration.toFixed(2)}ms`);
    }, 100);
  }
};

// Optimize loading strategy
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  // DOM is already loaded
  initializeApp();
}

// Handle app visibility changes for performance
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible') {
    performance.mark('app-visible');
  }
});
