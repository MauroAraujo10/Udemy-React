import React, { Component } from 'react';
import './css/style.css';

class Cronometro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numero: 0,
            textButtonIniciar: 'Iniciar'
        };

        this.timer = null;
        this.iniciar = this.iniciar.bind(this);
        this.zerar = this.zerar.bind(this);
    }

    iniciar() {
        if (this.timer !== null) {
            clearInterval(this.timer);
            this.timer = null;
            this.setState({textButtonIniciar: 'Retornar'});
        } else {

            this.timer = setInterval((e) => {
                console.log(e);
                let number = this.state.numero;
                this.setState({ numero: number += 0.1 })
            }, 100);
            this.setState({textButtonIniciar: 'Pause'});
        }
    }

    zerar() {
        if (this.timer !== null) {
            clearInterval(this.timer);
            this.timer = null;
        } 
        this.setState({
            numero: 0,
            textButtonIniciar: 'Iniciar'
        });
    }

    render() {
        return (
            <div className="container">
                <img className="img" src={require('./assets/cronometro.png')} alt="img" />
                <a className="timer">
                    {this.state.numero.toFixed(1)}
                </a>
                <div className="areaBtn">
                    <a className="botao" onClick={this.iniciar}>
                        {this.state.textButtonIniciar}
                    </a>
                    <a className="botao" onClick={this.zerar}>
                        Zerar
                    </a>
                </div>
            </div>
        );
    }

}

export default Cronometro;