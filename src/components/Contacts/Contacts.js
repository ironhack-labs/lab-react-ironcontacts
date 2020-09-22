import React from 'react';
import './Contacts.css';
import contacts from '../../contacts.json';

class Contacts extends React.Component {
  state = { contacts };

  render() {
    console.log(this.state);
    const { contacts } = this.state;
    return (
      <div>
        <h1>IronContacts</h1>

        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
          {contacts.slice(0, 5).map((contact) => {
            return (
              <tr key={contact.id}>
                <td>
                  <img
                    className="mugshot"
                    src={contact.pictureUrl}
                    alt="mugshot"
                  />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}

export default Contacts;
