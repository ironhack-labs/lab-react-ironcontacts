import React, { Component } from 'react'

export default class ironContacts extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <img src={this.props.img} alt="image actor" height="100" />
                <p>{this.props.popularity}</p>
            </div>
        )
    }
}

