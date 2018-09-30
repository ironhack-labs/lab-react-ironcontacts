import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onClick}>{this.props.caption}</button>
      </div>
    );
  }
}

export default Button;
