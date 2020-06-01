import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import contactsFromJSON from './contacts.json';
import Card from './components/Card';

class App extends Component {
  state = {
    firstVisibleContacts: contactsFromJSON.slice(0,5),
};

addRandomContactHandler = () => {
  //get a random number 
  // ....
  const initialContacts = this.state.firstVisibleContacts;
  const randomIndex = contactsFromJSON[Math.floor(Math.random() * contactsFromJSON.length)];
  initialContacts.push(randomIndex);
  console.log(randomIndex)
  this.setState({
    firstVisibleContacts: initialContacts,
  })
};

deleteContactHandler = (id) => {
  //copy the state to a new variable
  const initialContacts = this.state.firstVisibleContacts;
  // get the index to be deleted
  const deleteIndex = initialContacts.findIndex(contact => contact.id === id);
  // remove indexx from the moviesCopy
  initialContacts.splice(deleteIndex, 1);
  // sets movies copu to state
  this.setState({
    firstVisibleContacts: initialContacts
  })
};

sortByNameHandler = () => {
  const initialContacts = [...this.state.firstVisibleContacts]
    .sort((a, b) => a.name > b.name ? 1 : -1)
  this.setState({
    firstVisibleContacts: initialContacts
  })
}

sortByPopularityHandler = () => {
  const initialContacts = [...this.state.firstVisibleContacts]
    .sort((a, b) => a.popularity > b.popularity ? -1 : 1)
  this.setState({
    firstVisibleContacts: initialContacts
  })
}

  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <div className="main-container">
            <button onClick={() => this.addRandomContactHandler()}>Add Random Contact</button>
            <button onClick={() => this.sortByNameHandler()}>Sort by Name</button>
            <button onClick={() => this.sortByPopularityHandler()}>Sort by Popularity</button>
          <div className="card-container">
            <ul>
                {this.state.firstVisibleContacts.map(contact => {
                  return (
                    <Card 
                    key={contact.id} 
                    pictureUrl = {contact.pictureUrl}
                    name = {contact.name}
                    popularity = {contact.popularity}
                    clickToDelete={() => this.deleteContactHandler(contact.id)}
                    />
                  )
                })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
