import React from 'react';
import ReactDOM from 'react-dom';

import { ToastContainer } from 'react-toastify';

import './assets/css/main.css';
import { Routes } from './Routes';

ReactDOM.render(
  <React.StrictMode>
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);
