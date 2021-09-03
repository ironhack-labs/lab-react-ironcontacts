import { Component } from 'react';
import contacts from './contacts.json';
import './App.css';

const firstContacts = contacts.splice(0, 5);

export default class App extends Component{

  state = {
    contacts: firstContacts
  };

  render() {

    const contactsList = this.state.contacts.map((contact) => {
      return(
        <tr key={contact.id}>
          <td>
            <img src={contact.pictureUrl} alt={contact.name} style={{width:100, objectFit:'cover'}} />
          </td>
          <td>
            {contact.name}
          </td>
          <td>
            {contact.popularity}
          </td>
        </tr>
      )
    });

    return (
      <div className="App">
        <h1>IronContacts</h1>
        <table>
          <thead>
            <tr>
              <th>
                Picture
              </th>
              <th>
                Name
              </th>
              <th>
                Popularity
              </th>
            </tr>
          </thead>
          <tbody>
            {contactsList}
          </tbody>
        </table>
      </div>
    )
  };
}
