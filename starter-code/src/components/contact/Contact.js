import React, { Component } from 'react';
import './Contact.css';
import Button from '../button/Button';

class Contact extends Component {
  render() {
    return (
      <div className="contact">
            <img src={this.props.theImage} />
            <h4> {this.props.name} </h4>
            <h6> {this.props.popularity}</h6>  
            <div >
              <Button value="Delete this" role={this.props.delete}/>
            </div>
            
      </div>
    );
  }
}

export default Contact;