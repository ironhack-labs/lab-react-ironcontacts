import React, { Component } from "react"

class Button extends Component {
  render() {
    const { text, ability } = this.props
    return (
      <button onClick={ability}>{text}</button>
    )
  }
}

export default Button