
import React, { Component } from 'react';


class Contact extends Component {
    render() {
        
        return (
            <tr className="each-contact">
              <td><img className="contact-img" src={this.props.pictureUrl} alt=""/></td>
              <td>{this.props.name}</td>
              <td>{Math.round(this.props.popularity * 100) / 100}</td>
              <td> <button onClick={this.props.delete}>Delete</button></td>

            </tr>
        );
    }
}

export default Contact; 