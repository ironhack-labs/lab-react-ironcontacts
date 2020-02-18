import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        return (
            <tr>
                <td><img height='200px' src={this.props.pictureUrl} alt="face"/></td>
                <td>{this.props.name}</td>
                <td>{this.props.popularity}</td>
                <td><button onClick={()=>this.props.delete(this.props.key)}>Delete</button></td>
            </tr>
        )
    }
}
