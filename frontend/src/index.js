import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducer';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';
const Store=configureStore({
  reducer:rootReducer,
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    <Provider store={Store}>
    <Toaster position="top-center" />
    <App />

    </Provider>
    </React.StrictMode>
);

