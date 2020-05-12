import React, { Component } from 'react'
import contacts from './../contacts.json';
import Card from './../components/Card'

export default class Random  extends Component {
    state = {
        contactsData: contacts,
        
      }

      randomContact = (contacts) =>{
        
        let contactsData = contacts[Math.floor(Math.random() * contacts.length)];
        return contactsData
      }

    render() {
        return (
            <div>
                <button onClick={this.randomContact}>Add Random Contact</button>
            </div>
        )
    }
}

// export default Random
