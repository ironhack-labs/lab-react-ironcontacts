import React, { Component } from 'react'

export default class Button extends Component {
  render() {
    console.log(this.props.onclick)
    return (
      <div>
        <button onClick={this.props.onclick}>{this.props.name}</button>
      </div>
    )
  }
}
