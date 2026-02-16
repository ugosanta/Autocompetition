import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

//lien avec root dans l'index.html
const root = ReactDOM.createRoot(document.getElementById('root'));

//render de l'app dans le root
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);