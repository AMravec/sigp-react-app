import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import App from './App';
import store from './app/store';

import 'bulma/css/bulma.min.css';
import 'antd/dist/antd.css';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
