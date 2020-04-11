import React, { Component } from "react";
import contacts from "./contacts.json";
import "./App.css";

class App extends Component {
  state = {
    Celebrities: contacts.slice(0,5)
  }

  getRandomContact = () => {
    let randomContact = Math.floor(Math.random() * contacts.length);
    let addContact = this.state.Celebrities;
    if (contacts.indexOf(randomContact) === -1) {
      addContact.push(contacts[randomContact]);
    }

    this.setState({
      Celebrities: addContact
    })
    return addContact
  }

  render() {
    return (
      <div className='IronContacts'>
          <h1 className="App-title">IronContacts</h1>
          <button onClick={this.getRandomContact}>Add Random Contact</button>
        <table width='400px'>
          <tr>
            <th><h2>Picture</h2></th>
            <th><h2>Name</h2></th>
            <th><h2>Popularity</h2></th>
          </tr>       
        {this.state.Celebrities.map((contacts, index) => {
          return (
              <tr key={contacts.id}>
                  <td><img height='90px' src={contacts.pictureUrl} alt='' /></td>
                  <td><h3 className='CelebrityName'>{contacts.name}</h3></td>
                  <td><h3>{contacts.popularity}</h3></td>
                </tr>  
          );
        })}
        </table>
      </div>
    );
  }
}

export default App;