import React, { Component } from 'react'

export default class Botton extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.addRandomContact} >Add Random Contact</button>
      </div>
    )
  }
}
