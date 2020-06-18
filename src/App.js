import React from 'react';
import './App.css';
import contacts from './contacts.json';
import Contacts from './components/Contacts';

class App extends React.Component {

  state = {
    newContacts: contacts.slice(0,5)
  }

  addHandler = (e) => {
    let randomElement = contacts[Math.floor(Math.random() * contacts.length)];
    let addedContacts = [...this.state.newContacts];
    addedContacts.push(randomElement);
    this.setState({
      newContacts: addedContacts
    })
  }

  nameHandler = (e) => {
    function compare(a,b){
      let contactA = a.name.toUpperCase();
      let contactB = b.name.toUpperCase();
      if (contactA > contactB) {
        return 1;
      } else {
        return -1;
      }
    }
    let sortContacts = [...this.state.newContacts];
    sortContacts.sort(compare);
    this.setState({
      newContacts: sortContacts
    })
  }

  popularityHandler = (e) => {
    function compare(a,b){
      let contactA = a.popularity;
      let contactB = b.popularity;
      if (contactA < contactB) {
        return 1;
      } else {
        return -1;
      }
    }
    let sortContacts = [...this.state.newContacts];
    sortContacts.sort(compare);
    this.setState({
      newContacts: sortContacts
    })
  }

  render(){
    return(
      <div className="App">
        <div className="header">
          <img src="./vintage.png" alt=""/>
          <h1>IRONCONTACTS</h1>
          <img src="./vintage-flipped.png" alt=""/>
        </div>
        <div className="buttons">
        <button onClick={this.addHandler} className="addButton">Add Random Contact</button>
        <button onClick={this.nameHandler} className="addButton">Sort by name</button>
        <button onClick={this.popularityHandler} className="addButton">Sort by popularity</button>
        </div>
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
