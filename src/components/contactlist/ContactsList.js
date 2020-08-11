import React, { Component } from 'react';
import contacts from '../../contacts.json';

class ContactsList extends Component {
  constructor(props) {
    super(props);
    //this = la fenêtre du navigateur
    //State = lo que vemos ahora - this.state = notre fichier JSON
    const allContacts = (this.state = { contacts });
  }

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {/* On récupère les 5 premiers, puis on fait une itération sur chacun */}
            {this.state.contacts.splice(0, 5).map((contact) => {
              return (
                <tr>
                  <td>
                    {/* chaque style dans un paire de crochets */}
                    <img style={{ width: 100 }} src={contact.pictureUrl} />
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ContactsList;
