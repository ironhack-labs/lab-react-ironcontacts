import React from "react";
import "./App.css";
import "./bootstrap.min.css"
import contacts from "./contacts.json";

class ContactsList extends React.Component {
  state = {
    contacts: contacts.slice(0, 5),
  };

  handleRandom = () => {
    const randomContact = contacts[Math.floor(Math.random() * contacts.length)];

    const copyWithNewContacts = [randomContact, ...this.state.contacts];

    this.setState({
      contacts: copyWithNewContacts,
    });
  }

  handleSortName = () => {
    const copyContacts = [...this.state.contacts];

    copyContacts.sort((a, b) => a.name.localeCompare(b.name));

    this.setState({
      contacts: copyContacts,
    });
  };

  handleSortPop = () => {
    const copyContacts = [...this.state.contacts];

    copyContacts.sort(function (a, b) {
      return a.popularity - b.popularity;
    });

    this.setState({
      contacts: copyContacts,
    });
  };

  handleDelete = (event) => {
    const newArray = this.state.contacts.filter((contact) => contact.id !== event);

    this.setState({
      contacts: newArray,
    });
  };

  render() {
    return (
      <div>    
        <button onClick={this.handleRandom} className="btn btn-success m-2">Add Random Contact</button>
        <button onClick={this.handleSortName} className="btn btn-info m-2">Sort by Name</button>
        <button onClick={this.handleSortPop} className="btn btn-warning m-2">Sort by Popularity</button>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Picture</th>
            <th scope="col">Name</th>
            <th scope="col">Popularity</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {this.state.contacts.map((contact, index) => {
            return (
              <tr>
                <td>
                  <img
                    src={contact.pictureUrl}
                    alt= ""
                    style={{
                      height: 80,
                    }}
                  />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                <td><button
                  className="btn btn-danger"
                  onClick={() => this.handleDelete(contact.id)}
                >
                  Delete
                </button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </div>  
    );
  }
}

function App() {
  return (
    <div className="App">
      <h1 className="m-3 display-3">IronContacts</h1>
      <ContactsList />
    </div>
  );
}

export default App;
