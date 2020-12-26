import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Globalstyle} from './style';

ReactDOM.render(
  <React.StrictMode>
      <App>
          <Globalstyle/>
      </App>
  </React.StrictMode>,
  document.getElementById('root')
);
