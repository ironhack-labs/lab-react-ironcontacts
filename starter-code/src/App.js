import React, { Component, Fragment } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import contacts from './contacts.json';
//import ListContacts from './components/ListContacts';


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      partialContacts: contacts.slice(0,5),
      contacts: contacts,
    };
  }

  addContact() {
    let newContacts = [...this.state.contacts];
    let partialContacts = this.state.partialContacts;

    let contactRandom = newContacts[Math.floor(Math.random() * newContacts.length)];

    if (partialContacts.includes(contactRandom)) {
      this.addContact();
    } else {
      partialContacts.push(contactRandom);
    }

    this.setState({
      partialContacts: partialContacts
    });
  }

  sortByName() {
    let partialContacts = [...this.state.partialContacts];
    let sortedNames = partialContacts.sort((a, b) => a.name.localeCompare(b.name));

    this.setState({
      partialContacts: sortedNames
    });
  }

  sortByPopularity() {
    let partialContacts = [...this.state.partialContacts];
    let sortedPopularity = partialContacts.sort(function (a, b) {
      if (a.popularity > b.popularity) {
        return 1;
      }
      if (a.popularity < b.popularity) {
        return -1;
      }
      return 0;
    });

    this.setState({
      partialContacts: sortedPopularity
    });
  }

  deleteContact(contactIdx) {
    let partialContacts = [...this.state.partialContacts];
    partialContacts.splice(contactIdx, 1)

    this.setState({
      partialContacts: partialContacts
    });
  }

  render() {
    return (
      <div className="App container">
        <h1 className="title">IronContacts</h1>
        <div className="btn-group buttons level">
          <button className="button is-dark is-small level-item" onClick={this.addContact.bind(this)}>Add Random Contact</button>
          <button className="button is-dark is-small level-item" onClick={this.sortByName.bind(this)}>Sort by Name</button>
          <button className="button is-dark is-small level-item" onClick={this.sortByPopularity.bind(this)}>Sort by Popularity</button>
        </div>
        <table className="table is-striped is-narrow is-hoverable">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.partialContacts.map((contact, index) => {
                return (
                  <Fragment>
                    <tr>
                      <td>
                        <figure className="image is-128x128">
                          <img src={contact.pictureUrl} className="is-rounded" alt="1"/>
                        </figure>
                      </td>
                      <td>{contact.name}</td>
                      <td>{contact.popularity}</td>
                      <td><button onClick={this.deleteContact.bind(this, index)} className="button is-danger is-small">Delete</button></td>
                    </tr>
                  </Fragment>
                )
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default App;
