import "./App.css";
import contacts from "./contacts.json";
import React, { Component } from "react";

export class App extends Component {
  state = {
    allContacts: contacts,
    contacts: contacts.slice(0, 5),
  };


  handleClickRandom = () => {
    const randomContact = this.state.allContacts[Math.floor(Math.random() * this.state.allContacts.length)];
    const copyContacts = [...contacts];
    const random = {
      pictureUrl: randomContact.pictureUrl,
      name : randomContact.name,
      popularity: randomContact.popularity
    }
    copyContacts.push(random);
    this.setState({ contacts: [random, ...this.state.contacts] });
    console.log("ADDED RANDOM");
  }

  handleClickSortName = () => {
    const sortedCotactsCopy = [...this.state.contacts];
    const sortedContacts = sortedCotactsCopy.sort(function(a, b) {
      var nameA = a.name 
      var nameB = b.name 
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    this.setState({ contacts: sortedContacts});
    console.log("SORTED NAMES")
  }

  handleClickSortPopularity = () => {
    const sortedCotactsPopularityCopy = [...this.state.contacts];
    const sortedContactsPopularity = sortedCotactsPopularityCopy.sort(function(a, b) {
      var nameA = a.popularity 
      var nameB = b.popularity 
      if (nameA < nameB) {
        return 1;
      }
      if (nameA > nameB) {
        return -1;
      }
      return 0;
    });
    this.setState({ contacts: sortedContactsPopularity});
    console.log("SORTED POPULARITY")
  }

  handleDelete = (contactToRemove)=>{
    const contactsCopy = [...this.state.contacts];
    contactsCopy.splice(contactToRemove, 1)
    this.setState({contacts:contactsCopy})
  }



  render() {
    return (
      <div>
        <div class="contact-container">
            <div>
              <button onClick={this.handleClickRandom}>Add Random Contact</button>
              <button onClick={this.handleClickSortName}>Sort by name</button>
              <button onClick={this.handleClickSortPopularity}>Sort by popularity</button>
              <table id="table-complex" class="table">
                <thead>
                  <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>
                  </tr>
                </thead>
                <tbody>
                {this.state.contacts.map((contact) => { return (<tr>
                    <td key={contact.id}>
                      <img style={{width:100,height:100}}alt="" src={contact.pictureUrl} />
                    </td>
                    <td>{contact.name}</td>
                    <td>{contact.popularity}</td>
                    <td><button onClick={() => this.handleDelete(contact.id)}>Delete</button></td> 
                    {/* i dont understand why here on the deleteHandler we use a callback */}
                  </tr>)})}
                </tbody>
              </table>
            </div>;
        </div>
      </div>
    );
  }
}

export default App;
