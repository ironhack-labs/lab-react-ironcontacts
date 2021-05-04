import React from 'react';
import logo from './logo.svg';
import "./App.css";
import "./ContactCard/ContactCard"
import contacts from "./contacts.json";
import reactDom from 'react-dom';
import ContactCard from './ContactCard/ContactCard';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayCopy: contacts.slice(0, 5),
    };
  }
  displayActors() {
    return this.state.arrayCopy.map((contact, index) => {
      return (
        <div className="main">
          <table>
            <thead>
              <tr>
                <th colSpan="1">Picture</th>
                <th colSpan="1">Name</th>
                <th colSpan="1">Popularity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img src={contact.pictureUrl}></img>
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>
                  <button onClick={() => this.removeContact(contact.id)}>Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    });
  }

  addContact() {
    let randomContact = Math.floor(Math.random() * contacts.length);
    let newArray = [...this.state.arrayCopy];
    newArray.push(contacts[randomContact]);

    this.setState({ arrayCopy: newArray });
  }

  sortByPop() {
    let newArray = [...this.state.arrayCopy];
    newArray.sort(
      (contact1, contact2) => contact2.popularity - contact1.popularity
    );
    this.setState({ arrayCopy: newArray });
  }

  sortByName() {
    let newArray = [...this.state.arrayCopy];
    newArray.sort((a, b) => a.name.localeCompare(b.name));
      
    this.setState({ arrayCopy: newArray });
  }
  
  removeContact(id) {
    

    let filteredArray = this.state.arrayCopy.filter((contact) => contact.id !== id);
    this.setState({arrayCopy: filteredArray })

  }
  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={() => this.addContact()}>Add Random Contact</button>
        <button onClick={() => this.sortByPop()}>Sort by popularity</button>
        <button onClick={() => this.sortByName()}>Sort by name</button>
        

        {this.displayActors()}
      </div>
    );
  }
}


export default App
