import "./App.css";
import contacts from "./contacts.json";
import React from "react";

class App extends React.Component {
  state = {
  listOfContacts: contacts.slice(0, 5),
  };

  addRandom() {
    const randomIndex = Math.floor(Math.random() * 49) + 1;
    const randomContact = contacts[randomIndex];
    const stateCopy = { ...this.state };
    stateCopy.listOfContacts.push(randomContact);
    this.setState(stateCopy);
  }

  sortList(method){
    const copyOfState = {...this.state}
    if (method === 'name'){
      copyOfState.listOfContacts.sort((a, b)=> a.name.localeCompare(b.name)) 
    }else if (method === 'popularity'){
      copyOfState.listOfContacts.sort((a, b)=> b.popularity - a.popularity) 
    }
    this.setState(copyOfState)
  }

  deleteContact(index){
    const copyOfState = {...this.state}
    copyOfState.listOfContacts.splice(index, 1)
    this.setState(copyOfState)
  }

  render() {
    const contactList = this.state.listOfContacts.map((contact, index) => (
      <tr key={index}>
        <td>
          <img src={contact.pictureUrl} alt={contact.name} />
        </td>
        <td>{contact.name}</td>
        <td>{contact.popularity.toFixed(2)}</td>
        <td><button onClick={()=>this.deleteContact(index)}>Delete</button></td>
      </tr>
    ))

    return (
      <div className="App">
        <div className="Contacts">
          <h1>IronContacts</h1>
          <button onClick={() => this.addRandom()}>Add Random Contacts</button>
          <button onClick={() => this.sortList('name')}>Sort by name</button>
          <button onClick={() => this.sortList('popularity')}>Sort by popularity</button>
          <table>
            <thead>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>{contactList}</tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default App;
