import React, { Component } from 'react';

import './Contacts.css';


class Contact extends Component {
    
  
    render() {
     
            console.log(this.props)
    return (
      
        
        <tr className="Contact">
        <td><img src={this.props.img} width="20%"></img></td>
        <td>{this.props.name}</td>
        <td>{this.props.popularity}</td>
        </tr>
        
    
      
    );
  }
}

export default Contact;