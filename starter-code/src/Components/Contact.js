
import React, { Component } from 'react';


class Contact extends Component {
    render() {
        
        return (
            <tr className="each-contact">
              <td><img className="contact-img" src={this.props.pictureUrl} alt=""/></td>
              <td>{this.props.name}</td>
              <td>{this.props.popularity}</td>
            </tr>
        );
    }
}

export default Contact; 