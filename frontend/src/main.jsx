import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';

//lien avec root dans l'index.html
const root = ReactDOM.createRoot(document.getElementById('root'));

//render de l'app dans le root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);