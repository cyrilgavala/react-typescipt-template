import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root: HTMLElement | null = document.getElementById('root');
const reactRoot = ReactDOM.createRoot(root as HTMLElement);
reactRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
