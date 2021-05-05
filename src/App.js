import React from 'react';
import './App.css';
import contacts from "./contacts.json"

class App extends React.Component {

  state = {
    contacts: contacts.slice(0, 5)
  }

  addContact = () => {
    const newActor = {"name": "Ansel Elgort", "pictureUrl": "https://image.tmdb.org/t/p/w500/uQYUfGvOZkB5x25Z19UeyLABHmr.jpg", "popularity": 9.429994, "id": "09178713-ca9d-4657-a570-51d6f6459f57"}
    const contactsCopy = this.state.contacts.slice();
    contactsCopy.push(newActor);
    this.setState({
      contacts: contactsCopy
    })
  }

  render() {
    console.log(contacts);
    
    return (
      <div style={{border: "1px solid black", width: "50%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
        <h1>Iron Contacts</h1>
        <button onClick={this.addContact} style={{margin: "0 0 20px 0"}}>Add Random Contact</button>
        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
          {this.state.contacts.map(contact => (
            <tr key={contact.id}>
              <td>{<img src={contact.pictureURL} alt="" />}</td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td><button onClick={contacts.clickToDelete}>Delete</button></td>
            </tr>))}
        </table>
      </div>

    );
  }
}

export default App;
