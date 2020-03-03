import React, { Component } from 'react';
import './style.css';

class Celebrity extends Component {
  render() {
    console.log(this.props, 'Props');
    return (
      <tr>
        <td>
          <img src={this.props.info.pictureUrl} />
        </td>
        <td>{this.props.info.name}</td>
        <td>{this.props.info.popularity}</td>
        <td>
          <button onClick={() => this.props.del(this.props.info.name)}>Delete</button>
        </td>
      </tr>
    );
  }
}

export default Celebrity;
