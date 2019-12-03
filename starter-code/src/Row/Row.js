import React, { Component } from 'react'
let counter = 0;
export default class Row extends Component {
   

    render() {
        return (
            <tr>
                <td><img src={this.props.pictureUrl} alt="Fran guapo" ></img></td>
                <td>{this.props.name}</td>
                <td>{this.props.popularity}</td>
                <td>
                <button
              type="button"
              onClick={() => this.props.delete(this.props)}
            >
              Delete
            </button>
                </td>
            </tr>
        )
    }
}
