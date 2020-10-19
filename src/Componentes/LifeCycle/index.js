import React, {Component} from 'react';

class LifeCycle extends Component{
    constructor(props){
        super(props);
        this.state = {

        };
    }

    componentDidMount(){
        //Executado logo após o constructor ser montado. Funciona como se fosse um Load na página.
    }

    componentDidUpdate(){
        //Executado toda vez que alguma variavel da state tiver seu valor atualizado.
    }

    shouldComponentUpdate(){
        //Retorna um true ou false caso o componente deva ser atualizado
    }

    componentWillUnmount(){
        //Componente não é mais necessário e será desmontado do DOM
    }

    render(){
        return(
            <h1>
                Components Life's Cycle
            </h1>
        );
    }
}



export default LifeCycle;