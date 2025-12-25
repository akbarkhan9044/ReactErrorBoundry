import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as Sentry from "@sentry/react";

// 2. Initialize it with your specific DSN (Get this from your Sentry Dashboard)
Sentry.init({
  dsn: "https://b99142e774986760c2064022c3348320@o4510589036134400.ingest.us.sentry.io/4510597069930496",
 
  
  // Performance Monitoring:
  // 1.0 means capture 100% of transactions (Use lower value like 0.1 in production)
  tracesSampleRate: 1.0, 
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

