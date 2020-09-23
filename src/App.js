import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
import ContactsTable from './Components/ContactsTable';

export default class App extends Component {
  // why do we need to copy?
  state = {
    contacts: contacts.slice(0, 5),
    counter: 0,
  };

  addRandomHandler = () => {
    const contactsCopy = contacts;

    this.setState((state) => ({
      contacts: state.contacts.concat(
        contactsCopy[Math.floor(Math.random() * contactsCopy.length)]
      ),
    }));
  };

  sortContactName = () => {
    // sort whats rendered contacts
    let alphabetSort = this.state.contacts;
    alphabetSort.sort((a, b) => (a.name < b.name ? 1 : -1));
    console.log(alphabetSort);
    this.setState({
      contacts: alphabetSort,
    });
  };

  counter = () => {
    let number = this.state.counter;
    this.setState({
      counter: number + 1,
    });
  };

  sortContactPopularity = () => {
    let popularity = this.state.contacts;
    popularity.sort((a, b) => a.popularity - b.popularity);

    this.setState({
      contacts: popularity,
      chicken: 'Risa',
    });
    console.log(this.state);
  };

  render() {
    return (
      <Fragment>
        <h2>Ironcontacts</h2>
        {this.state.chicken ? (
          <h2>{this.state.chicken} x</h2>
        ) : (
          <h2>having a laugh?</h2>
        )}
        <div className="button-container">
          <button onClick={this.addRandomHandler}>Add Random Contact</button>
          <button onClick={this.sortContactName}>Sort by Name</button>
          <button onClick={this.counter}>
            counter shit:{this.state.counter}
          </button>
          <button onClick={this.sortContactPopularity}>
            Sort by Popularity
          </button>
        </div>
        <ContactsTable contactsList={this.state.contacts} />
      </Fragment>
    );
  }
}
