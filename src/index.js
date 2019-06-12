import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { SettingsProvider } from './components/Contexts/SettingsContext';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <SettingsProvider>
      <App />
    </SettingsProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
