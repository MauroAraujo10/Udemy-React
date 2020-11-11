import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './header';

import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Erro from './pages/Erro';
import Produto from './pages/Produto';

const Routes = () => {
    return (
        <BrowserRouter>
        <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/Sobre" exact component={Sobre} />
                <Route path="/Produto/:id" component={Produto} />
                <Route path="*" component={Erro} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;