import React, { Component } from 'react'

class Button extends Component {

  render() {
    return (
      <button className={this.props.clase} id={this.props.id} onClick={this.props.eventClick}>{this.props.text}</button>
    )
  }
}




export default Button