// import logo from './logo.svg';
import "./App.css";
import contacts from "./contacts.json";
import React, { Component } from "react";

let fiveFirst = contacts.splice(0, 5);

class Contacts extends Component {
  state = {
    myContacts: fiveFirst,
  };
  handleAddContact = () => {
    const randomIndex = Math.floor(Math.random() * Math.floor(contacts.length));
    const newContact = contacts.splice(randomIndex,1);
    this.setState({myContacts: [...this.state.myContacts, newContact[0]]});
  }
  handleSortName = () => {
    let sorted = [...this.state.myContacts];
    sorted.sort((a,b) => {return a.name.localeCompare(b.name)});
    this.setState({myContacts: sorted});
  }
  handleSortPopularity = () => {
    let sorted = [...this.state.myContacts];
    sorted.sort((a,b) => b.popularity-a.popularity);
    this.setState({myContacts: sorted});
  }
  handleDelete = (index) => {
    let spliced = [...this.state.myContacts];
    spliced.splice(index,1);
    this.setState({myContacts: spliced});
  }
  render() {
    return (
      <>
      <button onClick={this.handleAddContact}>Add a random contact</button>
      <button onClick={this.handleSortName}>Sort by name</button>
      <button onClick={this.handleSortPopularity}>Sort by popularity</button>
      <table>
        <thead>
          <tr>
            <td>Picture</td>
            <td>Name</td>
            <td>Popularity</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {this.state.myContacts.map((contact, index) => (
            <tr key={contact.id}>
              <td>
                <img
                  style={{
                    height: 100,
                  }}
                  src={contact.pictureUrl}
                  alt={contact.name}
                />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td><button onClick={() => this.handleDelete(index)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      </>
    );
  }
}

function App() {

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <Contacts />
    </div>
  );
}

export default App;
