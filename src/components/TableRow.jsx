import React, { Component } from 'react';

export default class TableRow extends Component {
  render() {
    return (
      <tr>
        <td>
          <img src={this.props.pictureUrl} alt={this.props.name} />
        </td>
        <td>{this.props.name}</td>
        <td>{this.props.popularity.toFixed(2)}</td>
      </tr>
    );
  }
}
