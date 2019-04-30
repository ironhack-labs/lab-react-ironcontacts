import React, { Component } from 'react'

export default class Movie extends Component {
  render() {
    return (
        
      <div>
        <h1>{this.props.name}</h1>
        <img src={this.props.src} height="100px" />
        <p>{this.props.popularity}</p>
      </div>
    )
  }
}
