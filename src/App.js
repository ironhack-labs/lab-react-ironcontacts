import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';

class App extends Component {
  constructor() {
    super();

    this.state = {
      contactsList: []
    };
  }

  componentWillMount = () => {
    this.setState({ contactsList: contacts.slice(0, 5) });
  };

  populateTable = () => {
    const { contactsList } = this.state;

    return contactsList.map((actor, index) => {
      return (
        <div className="table--row" key={`actor-${index + 1}`}>
          <img src={actor.pictureUrl} alt={`${actor.name}-img`} />
          <h4>{actor.name}</h4>
          <h4>{actor.popularity.toFixed(2)}</h4>
          <button
            id={index}
            className="btn--delete"
            onClick={this.deleteContact}
          >
            Delete
          </button>
        </div>
      );
    });
  };

  addRandomContact = () => {
    const { contactsList } = this.state;

    contactsList.length < contacts.length &&
      this.setState({
        contactsList: [
          ...contactsList,
          contacts[
            parseInt(
              contactsList.length +
                Math.random() * (contacts.length - 1 - contactsList.length)
            )
          ]
        ]
      });
  };

  sortContactByName = () => {
    const { contactsList } = this.state;

    const sortedList = contactsList.sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    this.setState({ contactsList: sortedList });
  };

  sortContactByPopularity = () => {
    const { contactsList } = this.state;

    const sortedList = contactsList.sort((a, b) => b.popularity - a.popularity);

    this.setState({ contactsList: sortedList });
  };

  deleteContact = e => {
    const { contactsList } = this.state;
    const index = e.target.id;

    contactsList.splice(index, 1);

    this.setState({ contactsList });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>IronContacts</h2>
        </header>
        <section className="App-content--container">
          <div className="btns--table">
            <button className="btn" onClick={this.addRandomContact}>
              Add Random Contact
            </button>
            <button className="btn" onClick={this.sortContactByName}>
              Sort by name
            </button>
            <button className="btn" onClick={this.sortContactByPopularity}>
              Sort by popularity
            </button>
          </div>
          <div className="content--table">
            <div className="table--header">
              <h3>Picture</h3>
              <h3>Name</h3>
              <h3>Popularity</h3>
              <h3>Action</h3>
            </div>
            {this.populateTable()}
          </div>
        </section>
      </div>
    );
  }
}

export default App;
