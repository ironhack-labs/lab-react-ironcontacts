import React, { Component } from 'react';


class Button extends Component{

  handleClick = () => {
    console.log('click')
  };

  render(){
    return(
      <button onclick={this.handleClick}>{this.props.children}</button>
    )
  }
}

export default Button