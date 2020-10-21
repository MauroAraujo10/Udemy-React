import React, {Component} from 'react';
import './style.css';

class Http extends Component{
    constructor(props){
        super(props);
        this.state = {
            nutri: []
        };
        
    }
    
    componentDidMount(){
        fetch('https://sujeitoprogramador.com/rn-api/?api=posts')
        .then((r) => r.json())
        .then((json) => {
            this.setState({nutri: json});
        })
    }

    render(){
        return(
            <div className="container ">
                <header>
                    <strong>React Nutri</strong>
                </header>
                {this.state.nutri.map((item) => {
                    return(
                        <article key={item.id} className="post">
                            <strong className="titulo">{item.titulo}</strong>
                            <img className="capa" src={item.capa} alt="img"/>
                            <p className="subtitulo">{item.subtitulo}</p>
                            <a className="botao" href="#">Acessar</a>
                        </article>
                    )
                })}
            </div>
        );
    }
}

export default Http;