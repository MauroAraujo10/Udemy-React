import React, { Component } from 'react';
import List from './list.js'

class ToDoList extends Component {
    render() {
        return (
            <div>
                <h1>Lista de Tarefas</h1>
                <List />
            </div>
        );
    }
}

export default ToDoList;