import React, { Component } from 'react'


export default class Contact extends Component {
    
    render() {
        return (
            <div className="contacto">
                <img src={this.props.pictureUrl} alt=""></img>
                <p>{this.props.name}</p>
                <p>{this.props.popularity}</p>
                <button onClick={() => this.props.delete(this.props)}>Delete</button>
            </div>
        )
    }
}
