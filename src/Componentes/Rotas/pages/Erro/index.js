import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Erro extends Component {
    render() {
        return (
            <div>
                <h2>
                    Página não encontrada
                </h2>
                <br />
                <Link to="/">
                    Home
                </Link>
            </div>
        );
    }

}

export default Erro;