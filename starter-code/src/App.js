import React, { Component } from "react";
import "./App.css";
import allContacts from "./contacts.json";
import ContactsList from "./components/ContactsList/ContactsList";

const top5Contacts = allContacts.slice(0, 5);

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      contacts: top5Contacts
    };
    this.sortbyname = this.sortbyname.bind(this);
  }

  addContact = () => {
    this.setState(state => {
      return {
        contacts: state.contacts.concat(
          allContacts[Math.floor(Math.random() * allContacts.length)]
        )
      };
    });
  };

  sortbyname = () => {
    const contacts = [...this.state.contacts].sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    this.setState({
      contacts
    });
  };

  sortbypopularity = () => {
    const contacts = [...this.state.contacts].sort((a, b) => {
      if (a.popularity < b.popularity) {
        return -1;
      }
      if (a.popularity > b.popularity) {
        return 1;
      }
      return 0;
    });
    this.setState({
      contacts
    });
  };

  onDeleteContact = (contactId) => {
    this.setState((state) => {
      return {
        contacts: state.contacts.filter((contact) => {
          return contact.id !== contactId
        })
      }
    })
  }

  


  render() {
    //const contacts = this.state.contacts;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">IronContacts</h1>
        </header>
        <div>
          <button onClick={this.addContact} className="addbtn">
            Add Random Contact
          </button>
          <button onClick={this.sortbyname} className="sortbyname">
            Sort by name
          </button>
          <button onClick={this.sortbypopularity} className="sortbypopularity">
            Sort by Popularity
          </button>
          <div className="title">
            <h1>Picture</h1>
            <h1>Name</h1>
            <h1>Popularity</h1>
            <h1>Action</h1>
          </div>
          <ContactsList contacts={this.state.contacts} onDelete={this.onDeleteContact} />
        </div>
      </div>
    );
  }
}

export default App;
