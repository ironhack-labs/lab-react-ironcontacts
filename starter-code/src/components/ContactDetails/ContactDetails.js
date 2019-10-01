import React, { Component } from 'react'

export default class ContactDetails extends Component {
  render() {
    return (
      <div className="user-details row">
        <div className="col col-1"><img src={this.props.pictureUrl} alt={this.props.name + " profile image"} title={this.props.name + " profile image"} /></div>
        <div className="col col-2"><h1>{this.props.name}</h1></div>
        <div className="col col-3"><h2>{(this.props.popularity).toFixed(2)}</h2></div>
        <div className="col col-4">{this.props.button}</div>
      </div>
    )
  }
}
