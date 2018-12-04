import React, { Component } from 'react'

export default class Botton extends Component {
  render() {
    return (
      <div>
        <button onClick={()=>this.props.operation(this.props.index)}>{this.props.name}</button>
      </div>
    )
  }
}
