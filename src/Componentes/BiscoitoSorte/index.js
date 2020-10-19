import React, { Component } from 'react';
import './css/estilo.css';

class Biscoito extends Component {
    constructor(props) {
        super(props);
        this.state = {
            frase: ''
        };

        this.frases = ['"Siga os bons e aprenda com eles."', '"O bom-senso vale mais do que muito conhecimento."',
            '"O riso é a menor distância entre duas pessoas."',
            '"Deixe de lado as preocupações e seja feliz."',
            '"Realize o óbvio, pense no improvável e conquiste o impossível."',
            '"Acredite em milagres, mas não dependa deles."',
            '"A maior barreira para o sucesso é o medo do fracasso."'];

            this.openButton = this.openButton.bind(this);
    }

    openButton(){
        let random = Math.floor(Math.random() * this.frases.length);
        this.setState({frase: this.frases[random]});
    }

    render() {
        return (
            <div className="container">
                <img src={require('./assets/biscoito.png')} alt="biscoito" className="img"/>
                <Botao nome="AbrirBiscoito" acaoBtn={this.openButton}/>
                <h3 className="textoFrase">
                    {this.state.frase}
                </h3>
            </div>
        );
    }
}

class Botao extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.acaoBtn}>
                    {this.props.nome}
                </button>
            </div>
        );
    }
}

export default Biscoito;