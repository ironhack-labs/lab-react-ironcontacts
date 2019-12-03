import React, { Component } from 'react';

import './style.scss';

class DeleteButton extends Component {
  render() {
    return (
      <div className="deleteButton  animated fadeIn">
        <button onClick={this.props.onChange}>Delete</button>
      </div>
    );
  }
}

export default DeleteButton;
