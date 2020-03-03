import React, { Component } from 'react';

class Conta extends Component {
  render() {
    return (
      <tr className="list">
        <td>
          <img src={this.props.picture} />
        </td>
        <td>
          {' '}
          <h3> {this.props.name}</h3>
        </td>
        <td>
          <h3>{this.props.popularity}</h3>
        </td>
        <td>
          <button onClick={() => this.props.delete(this.props.id)}>Delete</button>
        </td>
      </tr>
    );
  }
}

export default Conta;
