import React from 'react';
import './App.css';
import contacts from './contacts.json';

class App extends React.Component {
  state = {
    myContacts: contacts.slice(0, 5),
  };

  addRandom = () => {
    let newContact =
      contacts[Math.round(Math.random() * (contacts.length - 1))];
    this.setState({
      myContacts: [...this.state.myContacts, newContact],
    });
  };

  sortByName = () => {
    let sortArr = [...this.state.myContacts].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    this.setState({
      myContacts: sortArr,
    });
  };

  sortByPopularity = () => {
    let sortArr = [...this.state.myContacts].sort(
      (a, b) => b.popularity - a.popularity
    );
    this.setState({
      myContacts: sortArr,
    });
  };

  deleteContact = (contact, event) => {
    this.setState({
      myContacts: this.state.myContacts.filter((c) => c.id !== contact.id),
    });
  };

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <div className="button">
          <button onClick={this.addRandom}>Yeah new star !</button>
          <button onClick={this.sortByName}>Top A-Z</button>
          <button onClick={this.sortByPopularity}>Top famous</button>
        </div>
        <table>
          <thead className="titlecol">
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.myContacts.map((contact, index) => {
              return (
                <tr key={contact.id}>
                  <td>
                    <img src={contact.pictureUrl} alt={contact.name}></img>
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity.toFixed(2)}</td>
                  <td>
                    <button
                      key={contact.id}
                      onClick={(event) => this.deleteContact(contact, event)}
                    >
                      Bye bye
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

export default App;
