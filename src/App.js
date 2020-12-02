import React from 'react';
import './App.css';
import contacts from './contacts.json';

class App extends React.Component {
  state = {
    contactList: contacts.slice(0, 5),
  }

  addRandomContact = () => {
    console.log(this.state.contactList)
    console.log("contacts: ", contacts)
    let randomIndex = Math.floor(Math.random() * contacts.length);
    // console.log(contacts[randomIndex]);

    let newContactList = [...this.state.contactList, contacts[randomIndex]];

    // while statement as below to not have repeated contacts
    while (this.state.contactList.find(contact => contact.id === contacts[randomIndex].id)) {
      console.log('this contact is on the list');
      randomIndex = Math.floor(Math.random() * contacts.length);
      newContactList = [...this.state.contactList, contacts[randomIndex]];
    } 
    
    this.setState ({
      contactList: newContactList
    })
  }

  sortByName = () => {
    const sortedContacts = this.state.contactList.sort((contactA, contactB) => {
      return contactA.name > contactB.name ? 1 : -1;
      })
      // console.log(sortedContacts);

      this.setState ({
        contactList: sortedContacts
      })
  }

  sortByPopularity = () => {
    const sortedByPopularity = this.state.contactList.sort((contactA, contactB) => {
      return contactA.popularity > contactB.popularity ? -1 : 1;
      })
      // console.log(sortedContacts);

      this.setState ({
        contactList: sortedByPopularity
      })
  }

  removeContact = (index) => {
    // console.log('index', index);
    const newContactList = this.state.contactList.filter((contact, contactIndex) => {
      return contactIndex !== index;
    })

    this.setState ({
      contactList: newContactList
    })
  }
   
  render() {
    // console.log(contacts);
    // console.log(this.state.contactList);
  
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button type="button" onClick={this.addRandomContact}>Add Random Contact</button>
        <button type="button" onClick={this.sortByName}>Sort by name</button>
        <button type="button" onClick={this.sortByPopularity}>Sort by popularity</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            { this.state.contactList.map((contact, index) => {
            return (
              <tr key={contact.id}>
                <td><img src={contact.pictureUrl} alt={contact.name} /></td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                {/* having the arrow function below will make me need to click to trigger the removeContact function */}
                <td><button type="button" onClick={() => this.removeContact(index)}>Delete</button></td>
              </tr>
            )
            })}
          </tbody>
        </table>
  
      </div>
    );
  }
}

export default App;
