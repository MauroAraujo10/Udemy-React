import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Produto extends Component {
    constructor(props){
        super(props);
        this.state= {
            id: '',
            itens: [
                { id: 1, nome: 'Notebook', marca: 'dell', valor: 'R$2.500,00'},
                { id: 2, nome: 'Computador', marca: 'Inspiron', valor: 'R$1.500,00'},
                { id: 3, nome: 'Carro', marca: 'Corolla', valor: 'R$12.200,00'},
                { id: 4, nome: 'Moto', marca: 'Yamaha', valor: 'R$82.100,00'},
                { id: 5, nome: 'Relógio', marca: 'Calvin', valor: 'R$3.500,00'},
            ]
        };
    }

    componentDidMount(){
        const {id} = this.props.match.params;

        this.setState({id: id});
        let teste = this.state.itens.findIndex(x => x.id === id);
        console.log(teste);
    }

    render() {
        return (
            <div>
                <h2>
                    {this.state.itens.find(x => x.id === this.state.id)}
                </h2>
                <br />
                <Link to="/">
                    Home
                </Link>
            </div>
        );
    }

}

export default Produto;