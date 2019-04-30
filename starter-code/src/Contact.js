import React from "react";
import './Contact.css';

class Contact extends React.Component {
    render() {
        return (
            <tr>
                <td><p><img src={this.props.picture} /> </p></td>
                <td><p>{this.props.name}</p></td>
                <td><p>{this.props.popularity}</p></td>
                <td><button onClick={this.props.deleteContact}>Delete</button></td>
            </tr>
        )
    }
}

export default Contact;