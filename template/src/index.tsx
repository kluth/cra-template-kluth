import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('serviceWorker.ts')
    .then(registration => {
      console.log(`Service worker registered! Scope: ${registration.scope}`)
    })
    .catch(err => {
      console.log(`Error while registering Service worker: ${err}`)
    })
  })
}

ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);