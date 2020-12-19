import React from 'react';
import './App.css';
import contacts from './contacts.json';


class App extends React.Component {
  state = {
    contacts: contacts.slice(0, 5)
  };


  clickHandler = () => {

    const possibleContacts = contacts.filter(c => !this.state.contacts.includes(c));
    
    if (possibleContacts.length === 0) {
      return;
    }

    const randomContact = possibleContacts[Math.floor(Math.random() * possibleContacts.length)];
    const newContacts = this.state.contacts.concat(randomContact);

    this.setState({
      contacts: newContacts
    });
  };

  sortByNameHandler = () => {
    const sortedContacts = [...this.state.contacts].sort((a, b) => (a.name > b.name) ? 1 : -1);
    this.setState({
      contacts: sortedContacts
    });
  };

  sortByPopHandler = () => {
    const sortedContacts = [...this.state.contacts].sort((a, b) => (a.popularity < b.popularity) ? 1 : -1);
    this.setState({
      contacts: sortedContacts
    });
  };


  deleteHandler = (id) => {

    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id)
    });
  };



  render() {

    const mappingContacts = (contact) => {
      return (
        <tr key={contact.id}>
          <td><img src={contact.pictureUrl} alt="celebrity"></img></td>
          <td>{contact.name}</td>
          <td>{contact.popularity}</td>
          <td id="last-table-data"><button onClick={() => this.deleteHandler(contact.id)} className="btn btn-danger">Delete</button></td>
        </tr>
      );
    };

    const myContacts = this.state.contacts.map(mappingContacts);

    return (
      <div className="main-container">

        <h1>Popular Celebrities</h1>

        <div className="buttons-container">
          <button onClick={this.clickHandler} className="btn btn-primary">Add Random Contact</button>
          <button onClick={this.sortByNameHandler} className="btn btn-secondary">Sort by Name</button>
          <button onClick={this.sortByPopHandler} className="btn btn-light">Sort by Popularity</button>
        </div>

        <div>
          <table>
            <thead>
              <tr>
                <th>
                  <h4>Picture</h4>
                </th>
                <th>
                  <h4>Name</h4>
                </th>
                <th>
                  <h4>Popularity</h4>
                </th>
              </tr>
            </thead>
            <tbody>
              {myContacts}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
}

export default App;