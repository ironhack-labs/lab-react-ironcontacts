import React, { Component } from "react";
import contactsDb from "../contacts.json";
import SingleContact from "./singleContact";

export default class Contacts extends Component {
  state = {
    contacts: contactsDb.splice(0, 5),
    sortByName: false,
    sortByPopularity: false,
  };

  handleRandom = () => {
    const arrayCopy = [...this.state.contacts];
    let randomIndex = Math.floor(Math.random() * contactsDb.length);
    let randomContact = contactsDb[randomIndex];
    arrayCopy.push(randomContact);
    this.setState({ contacts: arrayCopy });
  };

  handleSortName = () => {
    this.setState({
      sortByName: !this.state.sortByName,
      sortByPopularity: false,
    });
  };

  handleSortPopularity = () => {
    this.setState({
      sortByPopularity: !this.state.sortByPopularity,
      sortByName: false,
    });
  };

  sortContacts = () => {
    if (this.state.sortByName) {
      return [...this.state.contacts].sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    } else if (this.state.sortByPopularity) {
      return [...this.state.contacts].sort((a, b) => {
        return b.popularity - a.popularity;
      });
    } else {
      return this.state.contacts;
    }
  };

  handleDelete = (index) => {
    const contactsCopy = [...this.state.contacts];
    contactsCopy.splice(index, 1);
    this.setState({ contacts: contactsCopy });
  };

  render() {
    return (
      <div className='contacts'>
        <h1 className='contacts__main-header'>
          <span role='img' aria-label='sparkles emoji'>
            ✨
          </span>
          A list of fancy people
          <span role='img' aria-label='sparkles emoji'>
            ✨
          </span>
        </h1>
        <button onClick={this.handleRandom} className='contacts__button'>
          Add random contact
        </button>
        <button onClick={this.handleSortName} className='contacts__button'>
          Sort by name
        </button>
        <button
          onClick={this.handleSortPopularity}
          className='contacts__button'
        >
          Sort by popularity
        </button>

        <table className='contacts__table'>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.sortContacts().map((contact, index) => (
              <SingleContact
                key={index}
                index={index}
                {...contact}
                handleDelete={this.handleDelete}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
