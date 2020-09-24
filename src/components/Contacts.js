import React from 'react';
import './contacts.css';
import contacts from '../contacts.json';

export default class Contacts extends React.Component {
  state = {
    showedContacts: contacts.slice(0, 5),
  };

  addRandomContact = () => {
    let showedContacts = this.state.showedContacts;
    let randomContact = contacts[Math.floor(Math.random() * contacts.length)];

    this.setState({
      showedContacts: [...showedContacts, randomContact],
    });
  };

  sortByName = () => {
    this.setState({
      showedContacts: this.state.showedContacts.sort((a, b) =>
        a.name.localeCompare(b.name)
      ),
    });
  };

  sortByPopularity = () => {
    this.setState({
      showedContacts: this.state.showedContacts.sort(
        (a, b) => b.popularity - a.popularity
      ),
    });
  };

  deleteContact = (id) => {
    this.setState({
      showedContacts: this.state.showedContacts.filter(
        (contact) => contact.id != id
      ),
    });
  };

  render() {
    let showedContacts = this.state.showedContacts;

    return (
      <div className="container">
        <h1 className="header"> Iron Contacts</h1>
        <div className="buttons">
          <button onClick={this.addRandomContact}>AddRandom</button>
          <button onClick={this.sortByName}>SortByName</button>
          <button onClick={this.sortByPopularity}>sortByPopularity</button>
        </div>
        <table>
          <tbody>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
            {showedContacts.map((contact) => {
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
                  <td>
                    {' '}
                    <button onClick={() => this.deleteContact(id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
