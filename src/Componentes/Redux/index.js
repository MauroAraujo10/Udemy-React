import React from "react";
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import Routes from './routes';
import Header from './Header';

import History from './services/history';
import Store from './store'

import './style.css';

export default function App() {
  return (
    <Provider store={Store}>
      <Router history={History}>
        <Header />
        <Routes />
      </Router>
    </Provider>
  )
}