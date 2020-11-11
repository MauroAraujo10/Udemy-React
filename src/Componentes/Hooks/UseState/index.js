import React, { useState } from 'react';
import './style.css';

export default function Calculadora() {
    const [visor, setVisor] = useState(0);
    const [calculo, setCalculo] = useState('');
    const [operacao, setOperacao] = useState('');
    const [logOperacoes, setLogOperacoes]= useState([]);

    function handleOperation(value, operation) {
        setCalculo(value);
        setVisor('');
        setOperacao(operation);
        document.getElementById('visor').focus();
    }

    function handleIgual(value) {
        let oldValue = Number(calculo);
        let valor = Number(value);
        let result;

        switch (operacao) {
            case 0:
                result = oldValue + valor;
                setLog(oldValue, '+', value, result);
                break;
            case 1:
                result = oldValue - valor;
                setLog(oldValue, '-', value, result);
                break;
            case 2:
                result = oldValue * valor;
                setLog(oldValue, '*', value, result);
                break;
            case 3:
                if (valor !== 0) {
                    result = oldValue / valor;
                    setLog(oldValue, '/', value, result);
                }
                else {
                    alert('Impossível divisão por zero !');
                }
                break;
            default:
                break;
        }

        setVisor(result);
        setCalculo(result);
        document.getElementById('visor').focus();
    }

    function setLog(oldValue, op, value, result){
        setLogOperacoes([
            ...logOperacoes,
            `${oldValue} ${op} ${value} = ${result}`
        ])
    }

    return (
        <div className="container">
            <p className="title">Calculadora</p>
            <input
                id="visor"
                type="Number"
                className="visor"
                value={visor}
                autofocus
                onChange={(e) => setVisor(e.target.value)} />

            <div className="botoes">
                <button className="btn" type="button" onClick={() => handleOperation(visor, 0)}>+</button>
                <button className="btn" type="button" onClick={() => handleOperation(visor, 1)}>-</button>
                <button className="btn" type="button" onClick={() => handleOperation(visor, 2)}>*</button>
                <button className="btn" type="button" onClick={() => handleOperation(visor, 3)}>/</button>
            </div>
            <button 
                className="botaoIgual"
                type="button"
                onClick={() => handleIgual(visor)}>
                =
                </button>
            <hr />
            <ul className="log">

            {logOperacoes.map(log => {
                return(
                    <li>{log}</li>
                )
            })}
            </ul>
        </div >
    );
}