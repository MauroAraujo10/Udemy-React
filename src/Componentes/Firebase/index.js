import React, { Component } from 'react';
import firebase from './service';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: 'Carregando..',
            nome: '',
            idade: '',
            listaUsuarios: []
        };
        this.cadastrar = this.cadastrar.bind(this);
    }

    componentDidMount() {
        
        firebase.database().ref('token').once('value').then(snapshot => {
            this.setState({ token: snapshot.val() });
        });

        firebase.database().ref('usuarios').on('value', (snapshot) => {
            
            let lista = [];

            snapshot.forEach(childItem => {
                lista.push({
                    key: childItem.key,
                    nome: childItem.val().Nome,
                    idade: childItem.val().Idade
                })
            });

            this.setState({listaUsuarios: lista})
        });
    }

    cadastrar(e) {
        e.preventDefault();

        let chave = firebase.database().ref('usuarios').push().key;

        firebase.database().ref('usuarios').child(chave).set({
            Nome: this.state.nome,
            Idade: Number(this.state.idade)
        });
        this.setState({
            nome: '',
            idade: ''
        })
    }

    render() {
        return (
            <div>
                <h1>Token: {this.state.token}</h1>
                <form onSubmit={this.cadastrar}>
                    <label>Nome: </label>
                    <input
                        type="text"
                        value={this.state.nome}
                        onChange={(e) => this.setState({ nome: e.target.value })} />
                        <br />

                    <label>Idade: </label>
                    <input
                        type="text"
                        value={this.state.idade}
                        onChange={(e) => this.setState({ idade: e.target.value })} />
                    <br />

                    <button type="submit">
                        Cadastrar
                    </button>

                </form>

                <hr />

                    {this.state.listaUsuarios.map((x) => {
                        return(
                            <div key={x.key}>
                                {x.nome}, {x.idade} anos
                            </div>
                        );
                    })}
                
            </div>
        );
    }
}