import React, { Component } from 'react';
import contacts from '../contacts.json'

class ContactList extends Component {

  render () {
    return (
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
        {contacts.slice(0,5).map(contact => {
              return (
              <tr>
                <td><img src={contact.pictureUrl} /></td>  {/* Ici on récupère les data dans le json ! */}
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
              </tr>
              )
            })}
          
        </tbody>

      </table>
    );
  }
}

export default ContactList