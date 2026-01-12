import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Theme from './components/Theme/theme.jsx'; // ✅ if default export

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/E-commerce/">
    <Theme>
      <App />
    </Theme>
  </BrowserRouter>
);
