import React from 'react';
import './contacts.css';
import contacts from '../contacts.json';

export default class Contacts extends React.Component {
  state = {
    // to show 5 contacts only
    fiveContacts: contacts.slice(0, 5),
  };

  render() {
    let fiveContacts = this.state.fiveContacts;

    return (
      <div className="container">
        <h1 className="header"> Iron Contacts</h1>
        <table>
          <tbody>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
            {fiveContacts.map((contact) => {
              const { name, pictureUrl, popularity, id } = contact;
              const image = (
                <img
                  className="profile-img"
                  src={pictureUrl}
                  alt="profileImg"
                />
              );

              return (
                <tr key={id}>
                  <td>{image}</td>
                  <td>{name}</td>
                  <td>{popularity.toFixed(2)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
