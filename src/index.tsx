import React from 'react';
import ReactDOM from 'react-dom';


import './assets/css/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { ToastContainer } from 'react-toastify';
import { AxiosConfig } from './AxiosConfig';
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
    <AxiosConfig />
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);
