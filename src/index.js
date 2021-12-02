import React from 'react';
import ReactDOM from 'react-dom';

import App from './app.js';

import Settings from './context/settings';

ReactDOM.render(
  <React.StrictMode>
    <Settings>
      <App />;
    </Settings>
  </React.StrictMode>,
  document.getElementById('root')
);
