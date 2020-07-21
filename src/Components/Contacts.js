import React, { Component } from 'react';
import contacts from '../contacts.json';

export class Contacts extends Component {
  state = {
    firstContacts: contacts.slice(0, 5),
  };

  addRandom = () => {
    let newContacts = [...this.state.firstContacts];
    newContacts.push(contacts[Math.floor(Math.random() * contacts.length)]);
    this.setState({ firstContacts: newContacts });
  };

  sortByName = () => {
    let newContacts = [...this.state.firstContacts];
    newContacts.sort((a, b) => a.name.localeCompare(b.name));
    this.setState({firstContacts: newContacts });
  }

  sortByPopularity = () => {
    let newContacts = [...this.state.firstContacts];
    newContacts.sort((a, b) => b.popularity - a.popularity)
    this.setState({firstContacts: newContacts });
  }

  deleteContact = (index) => {
    let newContacts = [...this.state.firstContacts];
    newContacts.splice(index, 1);
    this.setState({
    firstContacts: newContacts
    });

      
  }

  render() {
    return (
      <div className="tableau-div">
        <div className="btn-div">
          <button className="btn" onClick={this.addRandom}>
            Add contact
          </button>
          <button className="btn" onClick={this.sortByName}>
            Sort by Name
          </button>
          <button className="btn" onClick={this.sortByPopularity}>
            Sort by Popularity
          </button>
        </div>

        <table className="tableau">
          <thead>
            <tr>
              <td>
                <h1>Picture</h1>
              </td>
              <td>
                <h1>Name</h1>
              </td>
              <td>
                <h1>Popularity</h1>
              </td>
            </tr>
          </thead>
          <tbody>
            {this.state.firstContacts.map((contact) => (
              <tr key={contact.id}>
                <td>
                  <img
                    className="contact-img"
                    src={contact.pictureUrl}
                    alt=""
                  />
                </td>
                <td>{contact.name}</td>
                <td>{Math.round(contact.popularity * 100) / 100}</td>
                <td><button onClick={this.deleteContact}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Contacts;
