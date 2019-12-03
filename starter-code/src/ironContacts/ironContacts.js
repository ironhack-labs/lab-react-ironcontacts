import React, { Component } from 'react'
import "../ironContacts.css"

export default class ironContacts extends Component {
    render() {
        return (
            <div  className="contactStyle">
                <div className="containerStyle">
                    <h1>{this.props.name}</h1>
                    <img src={this.props.img} alt="image actor" height="100" />
                    <p>{this.props.popularity}</p>
                    <button class = "delete" onClick={this.props.removeClick}>Delete</button>
                </div>
            </div>
        )
    }
}

