import React from "react";
import { BrowserRouter } from 'react-router-dom';
import Routes from './Componentes/Redux/routes';
import { Provider } from 'react-redux';
import Store from './Componentes/Redux/store'

import Header from './Componentes/Redux/Header';

export default function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </Provider>
  )
}