import React, { Component } from 'react';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tarefa: '',
            items: []
        };
        this.saveForm = this.saveForm.bind(this);
        this.Delete = this.Delete.bind(this);
    }

    saveForm(e) {
        if (this._tarefaInput.value !== '') {
            let newItem = {
                text: this._tarefaInput.value,
                key: Date.now()
            };
            this.setState({
                items: [...this.state.items, newItem],
            });
            this._tarefaInput.value = '';
        }
        e.preventDefault();
    }

    Delete(key) {
        let filtro = this.state.items.filter((item)=> {
            return (item.key !== key);
        })
        this.setState({items: filtro});
    }

    render() {
        return (
            <div>
                <form onSubmit={this.saveForm}>
                    <input
                        type="text"
                        placeholder="Nova Tarefa"
                        name="tarefa"
                        onChange={(e) => this.setState({ tarefa: e.target.value })}
                        ref={(e) => { this._tarefaInput = e }} />

                    <button
                        type="submit">
                        Adicionar
                        </button>
                </form>
                <ul>
                    {this.state.items.map((item) => {
                        return(
                            <li 
                            key={item.key} 
                            onClick={() => this.Delete(item.key)}
                            style={{cursor: 'pointer'}}>
                                {item.text}
                            </li>
                        )
                    })}
                </ul>
                {
                this.state.items.length > 0 ?
                    <i>Clique nos items a serem excluidos</i> :
                    <></>
                }
                
            </div>
        );
    }
}

export default List;