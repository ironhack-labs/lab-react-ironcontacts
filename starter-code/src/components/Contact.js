import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
    render() {
        const popularityRounded = Math.round(this.props.popularity * 100) / 100;

        return (
            <tr>
              <td><img className='Contact-img' src={this.props.pictureUrl} alt='contact'/></td>
              <td className='Contact-td'>{this.props.name}</td>
              <td className='Contact-td'>{popularityRounded}</td>
              <td><button onClick={this.props.clickToDelete}>Delete</button></td>
            </tr>
        );
    }
}

export default Contact;