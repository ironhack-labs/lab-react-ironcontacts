import React from 'react';
import './App.css';
import contacts from './contacts.json';
import Contacts from './components/Contacts';

class App extends React.Component {

  state = {
    newContacts: contacts.slice(0,5)
  }

  clickHandler = (e) => {
    let randomElement = contacts[Math.floor(Math.random() * contacts.length)];
    let addedContacts = [...this.state.newContacts];
    addedContacts.push(randomElement);
    this.setState({
      newContacts: addedContacts
    })
  }

  render(){
    return(
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={this.clickHandler} className="addButton">Add Random Contact</button>
        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
          {
            this.state.newContacts.map((contact)=>
            <Contacts picture={contact.pictureUrl} name={contact.name} popularity={contact.popularity.toFixed(2)}/>
            )
          }
        </table>
      </div>
    );
  }
}

export default App;
