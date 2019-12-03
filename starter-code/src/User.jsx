// User.js
import React, { Component } from "react";

import contacts from './contacts.json'

class User extends Component {  
    render() {
        return (
            <div>
            <h2>
              {this.props.name} 
            </h2>
            <img src={this.props.pictureUrl} width="370" height="300" alt='actor' />
          </div>
          );
    }
}

export default User;