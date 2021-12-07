import React from 'react';
import ReactDOM from 'react-dom';
import Settings from './context/settings';
import Auth from './context/auth'
import App from './app.js';

ReactDOM.render(
  <React.StrictMode>
    <Settings>
      <Auth>
        <App />;
      </Auth>
    </Settings>
  </React.StrictMode>,
  document.getElementById('root')
);
