import React, {
  Component
}
from 'react';
import logo from './logo.svg';
import './App.css';
import Contacts from './contacts.json'

class App extends Component {

  addRandom = () => {
    let newContact = Contacts[Math.floor(Math.random() * Contacts.length - 4) +
      4];
    this.setState((prevState) => ({
      contacts: prevState.contacts.concat(newContact)
    }));
  }

  sortName = () => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.sort(
        (a, b) => {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        })
    }));

  }
  sortPop = () => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.sort(
        (a, b) => {
          if (a.popularity < b.popularity) {
            return -1;
          }
          if (a.popularity > b.popularity) {
            return 1;
          }
          return 0;
        })
    }));
  }

  removeRow = (i) => {
    this.setState(prevState => {

      let contacts = [...prevState.contacts];

      contacts.splice(i, 1);

      return {contacts};
    })
  }

  state = {
    contacts: Contacts.slice(0, 5)
  };

  render() {
  const {contacts} = this.state;

  return (
    <div className="App">
        <button onClick={this.addRandom}>Add Random Contact</button>
        <button onClick={this.sortName}>Sort by Name</button>
        <button onClick={this.sortPop}>Sort by Pop </button>
        <h1>IronContacts</h1>
        {contacts.map(({pictureUrl,name, popularity}, key) => (
          <div key={key} className='row-container'>
            <img src={pictureUrl}/>
            <h3>{name}</h3>
            <h3>{popularity}</h3>
            <button onClick={()=>this.removeRow(key)}>Remove</button>
          </div>
        ))}
    </div>
  );
}
}

export default App;
