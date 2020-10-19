import React, {Component} from 'react';
import Membro from './membro';

class Eventos extends Component{
    constructor(props){
        super(props); 
        this.state = {
            nome: ''
        };
    }

    render(){
        return(
            <div>
                <Membro nome="Mauro" idade="25" sexo="Masculino" cpf="114.917.126-00"/>
            </div>
        );
    }
}

export default Eventos;