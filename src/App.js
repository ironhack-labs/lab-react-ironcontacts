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

// sortByNameHandler = (field) => {
//   const initialContacts = [...this.state.firstVisibleContacts]
//     .sort((a, b) => a.name > b.name ? 1 : -1)
//   this.setState({
//     firstVisibleContacts: initialContacts
//   })
// }

// sortByPopularityHandler = () => {
//   const initialContacts = [...this.state.firstVisibleContacts]
//     .sort((a, b) => a.popularity > b.popularity ? -1 : 1)
//   this.setState({
//     firstVisibleContacts: initialContacts
//   })
// }

//Dryer code by Professor
sortContacts(field) {
  // Create a different compareFunction based on "field" value
  let compareFunction;
  if (field === 'name') {
    compareFunction = (a,b) => (a.name > b.name ? 1 : -1);
  }
  else if (field === 'popularity') {
    compareFunction = (a,b) => (b.popularity - a.popularity);
  }
  
  // Method 2
  // this.state.contacts.slice() create a copy of the array (this.state.allContacts)
  this.setState({
    firstVisibleContacts: this.state.firstVisibleContacts.slice().sort(compareFunction)
  });
}

  render() {
    return (
      <div className="App">
        <div className="main-container">
        <h1>IronContacts <span role="img"> ❤️ </span></h1>
            <button onClick={() => this.addRandomContactHandler()}>Add Random Contact</button>
            <button onClick={() => this.sortContacts("name")}>Sort by Name</button>
            <button onClick={() => this.sortContacts("popularity")}>Sort by Popularity</button>
          <div className="card-container">
            <ul>
                {this.state.firstVisibleContacts.map(contact => {
                  return (
                    <Card 
                    key={contact.id} 
                    pictureUrl = {contact.pictureUrl}
                    name = {contact.name}
                    popularity = {contact.popularity.toFixed(2)}
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
