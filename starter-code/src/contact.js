import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <div><tr key={this.props.id}>
            <td>
              <img src={this.props.pictureUrl} alt='' />
            </td>
            <td>{this.props.name}</td>
            <td>{this.props.popularity.toFixed(2)}</td>
            <td><button onClick={() => this.props.delete(this.props.idx)}>Delete</button></td>
          </tr>
                
            </div>
        )
    }
}
