import React from 'react';
import logo from './logo.svg';
import './App.css';
import Contacts from './contacts.json';
import Card from './components/Card';

class App extends React.Component {
  state = {
    listOfContacts: Contacts.slice(0, 5),
  };

  addRandomContact() {
    const copyOfContactList = [...this.state.listOfContacts];

    const addRandomContact =
      Contacts[Math.floor(Math.random() * Contacts.length)];

    copyOfContactList.push(addRandomContact);

    this.setState({
      listOfContacts: copyOfContactList,
    });
  }

  /*   createCard(contact, index) {
    return (
      <Card
        pictureUrl={contact.pictureUrl}
        name={contact.name}
        popularity={contact.popularity}
        id={contact.id}
        delete={() => this.deleteContact(index)}
      />
    );
  } */

  sortByName() {
    const sortByNameList = this.state.listOfContacts.sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    this.setState({
      listOfContacts: sortByNameList,
    });
  }

  sortByPopularity() {
    const sortByPopularityList = this.state.listOfContacts.sort(
      (a, b) => a.popularity - b.popularity
    );

    this.setState({
      listOfContacts: sortByPopularityList,
    });
  }

  deleteContact(id) {
    const copyOfContactList = [...this.state.listOfContacts];

    const index = copyOfContactList.findIndex((contact) => contact.id === id);
    copyOfContactList.splice(index, 1);

    this.setState({
      listOfContacts: copyOfContactList,
    });
  }

  render() {
    return (
      <div className="App">
        <div>
          <h1>IronContacts</h1>
        </div>
        <div>
          <button onClick={() => this.addRandomContact()}>Add Random</button>
          <button onClick={() => this.sortByName()}>Sort by name</button>
          <button onClick={() => this.sortByPopularity()}>
            Sort by popularity
          </button>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>Action</th>
              </tr>
            </thead>
            {this.state.listOfContacts &&
              this.state.listOfContacts.map((contactItem) => (
                <tr key={contactItem.id}>
                  <td>
                    <img src={contactItem.pictureUrl} alt=""></img>
                  </td>
                  <td>
                    <p>{contactItem.name}</p>
                  </td>
                  <td>
                    <p>{contactItem.popularity.toFixed(2)}</p>
                  </td>
                  <td>
                    <button onClick={() => this.deleteContact(contactItem.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </table>
        </div>
      </div>
    );
  }
}

export default App;
