import './App.css';
import React from 'react';
import contacts from './contacts.json';

class App extends React.Component {
  state = {
    contacts: contacts.slice(5),
    displayList: contacts.slice(0, 5),
  };

  addRandom = () => {
    let contacts = [...this.state.contacts];
    let displayList = [...this.state.displayList];

    const randomContact = contacts[Math.floor(Math.random() * contacts.length)];

    contacts = contacts.filter(contact => contact !== randomContact);
    displayList.push(randomContact);

    this.setState({
      displayList: displayList,
      contacts: contacts,
    });
  };

  sortByName = () => {
    const displayList = [...this.state.displayList];

    displayList.sort((a, b) => {
      if (a.name > b.name) return 1;
      else return -1;
    });

    this.setState({
      displayList: displayList,
    });
  };

  sortByPopularity = () => {
    const displayList = [...this.state.displayList];

    displayList.sort((a, b) => b.popularity - a.popularity);

    this.setState({
      displayList: displayList,
    });
  };

  deleteContact = e => {
    const displayList = [...this.state.displayList];
    const contacts = [...this.state.contacts];

    const name = e.target.getAttribute('name');
    const pictureUrl = e.target.getAttribute('pictureUrl');
    const popularity = e.target.getAttribute('popularity');
    const id = e.target.getAttribute('id');

    contacts.push({ name, pictureUrl, popularity, id });

    this.setState({
      displayList: displayList.filter(contact => contact.name !== name),
      contacts: contacts,
    });
  };

  renderTable = () => {
    return this.state.displayList.map(contact => (
      <tr key={contact.id}>
        <td>
          <img
            className="contact-pic"
            src={contact.pictureUrl}
            alt={contact.name}
          />
        </td>
        <td>{contact.name}</td>
        <td>{contact.popularity}</td>
        <td>
          <button {...contact} onClick={this.deleteContact}>
            Delete
          </button>
        </td>
      </tr>
    ));
  };

  render = () => {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Iron Contacts</h1>
          <div className="buttons-container">
            <button onClick={this.addRandom}>Add Random Contact!</button>
          </div>
          <table>
            <thead>
              <tr>
                <th>Picture</th>
                <th onClick={this.sortByName}>Name</th>
                <th onClick={this.sortByPopularity}>Popularity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{this.renderTable()}</tbody>
          </table>
        </header>
      </div>
    );
  };
}

export default App;
