import React from "react";
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import Routes from './Componentes/Redux/routes';
import Header from './Componentes/Redux/Header';

import History from './Componentes/Redux/services/history';
import Store from './Componentes/Redux/store'

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