import React, { Component } from 'react';

class Formulario extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            email: '',
            senha: '',
            error: ''
        };
        this.saveForm = this.saveForm.bind(this);
    }

    saveForm(e) {

        const {nome, email, senha} = this.state;
        if (nome !== '' && email !== '' && senha !== ''){
            this.setState({error: ''});
            alert('Cadastrado com Sucesso');
        }else{
            this.setState({error: 'Preencha todos os campos !!'});
        }

        e.preventDefault();
    }

    render() {
        return (
            <div>
                <h1>Novo Usuário</h1>
                <form onSubmit={this.saveForm}>
                    <label>Nome: </label>
                    <input
                        type="text"
                        onChange={(e) => this.setState({ nome: e.target.value })} />
                    <br />

                    <label>E-mail: </label>
                    <input
                        type="text" 
                        onChange={(e) => this.setState({ email: e.target.value })} />
                    <br />

                    <label>Senha: </label>
                    <input
                        type="password" 
                        onChange={(e) => this.setState({ senha: e.target.value })} />
                    <br />  

                    <button type="submit">
                        Botão
                    </button>
                    <h4>{this.state.error}</h4>
                </form>
            </div>
        );
    }

}

export default Formulario;