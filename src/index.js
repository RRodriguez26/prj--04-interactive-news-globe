/*
 * Purpose: Represents the entry point of the application.
 * Return Value: None (side effect of rendering the main application component).
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
/**
 * TODOs (Big Feature):
 * (1) Feature to open and close panel
 * (2) Change clock (or multiple clock) depending on the country and how big a country is
 * (3) Change view of the globe when clicking on a country
 * (4) Change filter in panel have "sticky" rope attached to the panel
 * 
 */
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
