import React, { Component } from 'react'

export default class Button extends Component {
  render() {
    return (
      <button
        className={`button${this.props.classes ? ' ' + this.props.classes : ''}`}
        onClick={this.props.clickHandler}>
          {this.props.children}
      </button>
    )
  }
}

