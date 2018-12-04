import React, { Component } from 'react'
import contacts from '../../contacts.json';
import "./ListContacts.css"

export default class ListContacts extends Component {
  render() {
    return (
      <div>
        <h1>IronContacts</h1>
        <table>
            <thead>
            <tr>
                <td>Picture</td>
                <td>Name</td>
                <td>Popularity</td>
            </tr>
            </thead>
            <tbody>
                
            </tbody>
           
            {contacts.slice(0, 5).map(contact=>
            <tr>
                <td><img className="image-contact" src={contact.pictureUrl} alt=""/></td>
                <td>{contact.name}</td>
                <td>{parseFloat(contact.popularity).toFixed(2)}</td>           
            </tr>
            
            )}
        </table>
      </div>
    )
  }
}
