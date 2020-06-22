import React, { Component } from 'react'
import './Contact.css';

export default class Contact extends Component {
    render(props) {
        return (
            <div className="contact">
                <tr>
                    <td><img src={this.props.pictureUrl} alt=""/></td>
                    <td><h2>{this.props.name}</h2></td>
                    <td><p>{this.props.popularity}</p></td>
                </tr>
            </div>
        )
    }
}
