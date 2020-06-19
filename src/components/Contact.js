import React, { Component } from 'react';
import "./Contact.css";

class Contact extends Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <tr className="contact">
                <td><img src={this.props.pictureUrl} alt=""/></td>
                <td><h2>{this.props.name}</h2></td>
                <td><p>{this.props.popularity}</p></td>
                <td><button onClick={()=> {this.props.deleteContactHandler(this.props.index)}}>Delete</button></td>
            </tr>
        );
    }
}

export default Contact;