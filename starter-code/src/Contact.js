import React, { Component } from 'react';
import './Contact.css';

export default class Contact extends Component {
    render () {
        return (
            <tr class="list">
               <td><img height="100" src={this.props.pictureUrl} alt=""/></td>
               <td>{this.props.name}</td>
               <td>{this.props.popularity}</td>
               <td><button onClick={() => this.props.clickToDelete()}>Delete</button></td>
            </tr>
        )
    }
}