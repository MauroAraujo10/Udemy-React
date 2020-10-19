import React, { Component } from 'react';

class Contador extends Component {

  constructor(props) {
    super(props);
    this.state = {
      contador: 0
    };
    this.Increase = this.Increase.bind(this);
    this.Decrease = this.Decrease.bind(this);
  }

  Increase() {
    this.setState({
      contador: this.state.contador + 1
    })
  }

  Decrease() {
    let count = this.state.contador;
    this.setState({
      contador: count > 0 ? count - 1 : count
    })
  }

  render() {
    return (
      <div style={{ marginLeft: '20px' }}>
        <h2>Contador: {this.state.contador}</h2>
        <button
          onClick={this.Increase}>
          +
          </button>

        <button
          onClick={this.Decrease}>
          -
          </button>
      </div>
    );
  }
}

export default Contador;