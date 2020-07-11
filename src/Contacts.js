import React, { Component } from 'react';
import contacts from './contacts.json';

export default class Contacts extends Component {

  constructor(props) {
    super(props);
    this.state = {
        myContacts: contacts.slice(0, 5)             
    }
  }

  random = () => {
    const arr = [...this.state.myContacts]
    const randomContact = contacts[Math.floor(Math.random() * contacts.length)]
    arr.push(randomContact)
    this.setState({myContacts: arr})
  }

  sortByName = () => {
    const arr = [...this.state.myContacts].sort((a, b) => {
      return a.name.localeCompare(b.name)
    })
    this.setState({myContacts: arr})
  }

  sortByPop = () => {
    const arr = [...this.state.myContacts].sort((a, b) => {
      return b.popularity - a.popularity
    })
    this.setState({myContacts: arr})
  }

  delete = id => {

    // Find the index of the movie to delete in the arr
    const arr = [...this.state.myContacts]; // We can't modify the state directly, that's why we need a copy
    const arrIndex = arr.findIndex(item => item.id === id);

    // Remove the movie with the index we just found
    arr.splice(arrIndex, 1); 

    // Update the state + render the component
    this.setState({ myContacts: arr });

  };
  render() {
    
    const myContacts = this.state.myContacts.map((person) => (
      <tr key={person.id}>
        <td>
          <img src={person.pictureUrl} alt="Person"></img>
        </td>
        <td>{person.name}</td>
        <td>{person.popularity}</td>
        <td>
          <button className="btn btn-danger" onClick={() => this.delete(person.id)}>Delete</button>
        </td>
      </tr>
    ));

    return (
      <div>
      <h1>IronContacts</h1>
      <button className="btn btn-primary" onClick={this.random}>Add contact</button>
      <button className="btn btn-secondary ml-3" onClick={this.sortByName}>Sort by Name</button>
      <button className="btn btn-secondary ml-3" onClick={this.sortByPop}>Sort by Popularity</button>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Picture</th>
            <th scope="col">Name</th>
            <th scope="col">Popularity</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>{myContacts}</tbody>
      </table>
      </div>
    );
  }
}
