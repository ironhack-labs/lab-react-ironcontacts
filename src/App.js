import React, { Component } from 'react'
import contacts from "../src/contacts.json";

  //State n'est utilisable que dans une classe 
  // state = {
  //   contacts: contactsJSON
  //     .sort((a, b) => a.name.localeCompare(b.name))
  //     .splice(0, 5), // Here it doesnt matter if we use the .splice()
  //   // method on the moviesJSON array, its not part of state
  // };

  //pour chaque personne creer une tr pour chaque personne

//refactoriser en classe
export default class App extends Component {
  state={
    contacts:contacts.splice(0,5)
  };

  handleShowMore = () => {
  
    const newContact = contacts.splice(5, 1);
    const copyWithNewContact = [...this.state.contacts,...newContact];

    this.setState({
      contacts: copyWithNewContact,
    });
  }

  handleSortName = () => {
    console.log("clicked");

    const copyContacts = [...this.state.contacts];
    copyContacts.sort((a, b) => a.name.localeCompare(b.name));

    this.setState({
      contacts: copyContacts,
    });
  };

  handleSortPopularity = () => {
    console.log("clicked");

    const copyContacts = [...this.state.contacts];
    copyContacts.sort((a, b) => b.popularity-a.popularity);

    this.setState({
      contacts: copyContacts,
    });
  };

  handleDelete = (id) => {
  const newArray = this.state.contacts.filter((contact) => contact.id !== id);
  console.log(newArray);

  this.setState({
    contacts: newArray,
  });
};

    render() {
        return (

    <div className="App">
      <p></p>
      <h1>IronContacts</h1>
      <button onClick={this.handleShowMore}> Add Random Contact</button>
      <button onClick={this.handleSortName}> Sort by name</button>
      <button onClick={this.handleSortPopularity}> Sort by popularity</button>

      <table>
        <thead>
          <tr>
            <th colspan="1">
              <h2>Picture</h2>
            </th>
            <th colspan="1">
              <h2>Name</h2>
            </th>
            <th colspan="1">
              <h2>Popularity</h2>
            </th>
            <th colspan="1">
              <h2>Action</h2>
            </th>
          </tr>
        </thead>
        <tbody>
          {this.state.contacts.map((el) => (
            <tr>
              <td><img style={{width:50}}
            src={el.pictureUrl} 
            className="Contact-picture"
            alt={el.name}
          /></td>
              <td>{el.name}</td>
              <td>{el.popularity.toFixed(2)}</td>
              <td><button onClick={()=>this.handleDelete(el.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );  
        }
    }