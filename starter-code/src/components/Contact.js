import React, {Component} from 'react';

class Contact extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <tr>
                <td>
                    <img alt="contacto" src={this.props.contact.pictureUrl} />
                </td>
                <td>{this.props.contact.name}</td>
                <td>{this.props.contact.popularity.toFixed(2)}</td>
                
            </tr>
        );
    }
}

export default Contact;