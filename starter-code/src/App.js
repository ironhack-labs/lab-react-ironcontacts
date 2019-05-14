import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'


class App extends React.Component {

  state = {
    contacts: contacts.slice(0, 5)
  }; 

  addRandomContacts = () => {
    let randomContacts = this.state.contacts;

    randomContacts.push(contacts[Math.floor(Math.random() * contacts.length + 1)]);

    this.setState({
      contacts: randomContacts
    });
  };

  /*sortByName = () => {
    let sortedContacts = this.state.contacts;
    sortedContacts.sort((a, b) =>
      if (a < b) return -1;
      else if (a > b) return 1;
    });
    this.setState({
      contacts: sortedContacts
    })
  } */

  sortByName = () => {
    let sortedContacts = this.state.contacts;
    sortedContacts.sort((a, b) => a.name.localeCompare(b.name));
    this.setState({
      contacts: sortedContacts
    });
  }; 

  

  sortByPopularity = () => {
    let sortedContacts = this.state.contacts;
    sortedContacts.sort(function(a, b) {
      return b.popularity - a.popularity;
    });
    this.setState({
      contacts: sortedContacts
    });
  };
  
  
  

  deleteContacts = (i) => {
    let contactsCopy = [ ... this.state.contacts ]
    contactsCopy.splice(i,1)
    this.setState( {
      contacts: contactsCopy
    } )
  }

  
  render() {

   // let pictureUrl = this.state.contacts
    let name = this.state.contacts
   // let popularity = this.state.contacts

    console.log(this.state.contacts)

    /*for (let i = 0; i < this.state.contacts.length; i++){
      contacts[i] = <li>{this.state.contacts[i]}</li>
      console.log(contacts[i])
    }

*/


    return (
    <div className="App">
    <h1>IronContacts</h1>
    <br></br>
    <button onClick={this.addRandomContacts}>Add a random contact</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPopularity}>Sort by popularity</button>
        <br></br>
        <br></br>
        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>
          </tr>
          {this.state.contacts.length > 0
            ? this.state.contacts.map((contacts, i) => {
                return (
                  <tr>
                    <td>
                      <img
                        alt = "celebrity"
                        width = "75 px"
                        src={contacts.pictureUrl}
                      />
                    </td>
                    <td>{contacts.name}</td>
                    <td>{contacts.popularity}</td>
                    <td>
                      <button
                        onClick={() => {
                          this.deleteContacts(i);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })
            : "Add"}
        </table>  
      </div>
    )
            }
          }
            
                 
export default App;
            