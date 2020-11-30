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

  createCard(contact) {
    return (
      <Card
        pictureUrl={contact.pictureUrl}
        name={contact.name}
        popularity={contact.popularity}
      />
    );
  }

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
              </tr>
            </thead>
            {this.state.listOfContacts.map(this.createCard)}
          </table>
        </div>
      </div>
    );
  }
}

export default App;
