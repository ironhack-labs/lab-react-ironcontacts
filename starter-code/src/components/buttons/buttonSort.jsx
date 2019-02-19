import React, { Component } from "react";

class ButtonSort extends Component {
  render() {
    return (
      <button onClick={this.props.onClick}>{this.props.children}</button>
    )
  }
}

  export default ButtonSort;