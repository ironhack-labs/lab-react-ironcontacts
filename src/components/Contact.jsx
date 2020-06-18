import React, { Component } from 'react';

export default class Contact extends Component {
    render() {
        return (
            <div className="contact">
                <img src={this.props.pictureUrl} alt=""/> 
                <p>{this.props.name}</p>
                <p>{this.props.popularity}</p>
            </div>
        )
    }
}
