import React, {Component} from 'react';

class Membro extends Component{
    constructor(props){
        super(props);
        this.state = {
            usuario: props.nome,
            idade: props.idade,
            sexo: props.sexo,
            cpf:props.cpf
        };
    }

    render(){
        return(
            <div>
                <h2>Ficha de Cadastro</h2>
                <h3>
                    Bem vindo(a) {this.state.usuario}
                    <br />
                    Idade: {this.state.idade}
                    <br/>
                    Sexo: {this.state.sexo}
                    <br/>
                    CPF: {this.state.cpf}
                </h3>                
            </div>
        );
    }
}

export default Membro;