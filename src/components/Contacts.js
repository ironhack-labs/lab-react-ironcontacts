import React, { Component } from 'react';
import '../components/Contacts.css';

class Contacts extends Component {

    render() {
        return (
            <tr className="contacts">
                <td><img src={this.props.picture} alt=""/></td>
                <td className="name-contact">{this.props.name}</td>
                <td>{this.props.popularity}</td>
            </tr>
        )
    }
}

export default Contacts