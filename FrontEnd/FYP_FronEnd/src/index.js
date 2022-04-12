import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import store from './Redux/store';
import ScrollToTop from './Components/CommonComponents/ScrollToTop';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <ScrollToTop />
    <Provider store={store}>

      <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
