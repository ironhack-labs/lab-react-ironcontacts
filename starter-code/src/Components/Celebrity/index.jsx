import React, { Component } from 'react';

import './style.scss';

class Celebrity extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <tr className="celebrityCard">
        <td>
          <img src={this.props.picture}></img>
        </td>
        <td>{this.props.name}</td>
        <td>{this.props.popularity.toFixed(2)}</td>
        {/* <td>{this.props.id}</td> */}
      </tr>
    );
  }
}

export default Celebrity;
