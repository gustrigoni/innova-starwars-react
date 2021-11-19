import React from 'react';
import ReactDOM from 'react-dom';

import 'react-toastify/dist/ReactToastify.css';
import './assets/css/main.css';

import { ToastContainer } from 'react-toastify';
import { AxiosConfig } from './AxiosConfig';
import { Routes } from './Routes';
import { SearchProvider } from './SearchContext';

ReactDOM.render(
  <React.StrictMode>
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      theme={'dark'}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
    <AxiosConfig />
    <SearchProvider>
      <Routes />
    </SearchProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
