import React, { Component } from 'react';
import contacts from '../contacts.json';

class Table extends Component {
  constructor() {
    super();
    this.state = {
      contacts,
      firstContacts: contacts.slice(0, 5),
    };

    this.randomContacts = this.randomContacts.bind(this);
    this.sortedContacts = this.sortedContacts.bind(this);
    this.sortedByPopularity = this.sortedByPopularity.bind(this);
  }

  randomContacts() {
    const newArray = [...this.state.firstContacts];
    const randomContact = this.state.contacts[
      Math.floor(Math.random() * this.state.contacts.length - 1)
    ];
    if (!newArray.includes(randomContact)) {
      newArray.push(randomContact);
    }
    this.setState({
      firstContacts: newArray,
    });
  }

  sortedContacts() {
    const sortedContacts = [...this.state.firstContacts].sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    this.setState({
      firstContacts: sortedContacts,
    });
  }

  sortedByPopularity() {
    const sortedContacts = [...this.state.firstContacts].sort((a, b) => {
      return b.popularity - a.popularity;
    });
    this.setState({
      firstContacts: sortedContacts,
    });
  }

  deleteContact(idx) {
    const newArray = [...this.state.firstContacts];
    newArray.splice(idx, 1);
    this.setState({
      firstContacts: newArray,
    });
  }

  render() {
    const arrayContacts = this.state.firstContacts.map((contact, idx) => (
      <tr>
        <td>
          <img src={contact.pictureUrl} alt="ContactPhoto" className="avatar" />
        </td>
        <td>{contact.name}</td>
        <td>{parseFloat(contact.popularity).toFixed(2)}</td>
        <td>
          <button
            key={idx}
            onClick={() => this.deleteContact(idx)}
            className="btn btn-danger m-3"
          >
            {' '}
            Delete{' '}
          </button>
        </td>
      </tr>
    ));

    return (
      <div className="list container-fluid">
        <h1>IronContacts</h1>

        <button onClick={this.randomContacts} className="btn btn-warning m-3">
          {' '}
          Add Random Contacts{' '}
        </button>
        <button onClick={this.sortedContacts} className="btn btn-success m-3">
          {' '}
          Sort by name{' '}
        </button>
        <button
          onClick={this.sortedByPopularity}
          className="btn btn-primary m-3"
        >
          {' '}
          Sort by popularity{' '}
        </button>
        <br />
        <br />
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th scope="col"> Picture </th>
              <th scope="col"> Name </th>
              <th scope="col"> Popularity </th>
              <th scope="col"> Action </th>
            </tr>
          </thead>

          <br />
          <tbody>{arrayContacts}</tbody>
          
        </table>
      </div>
    );
  }
}

export default Table;
