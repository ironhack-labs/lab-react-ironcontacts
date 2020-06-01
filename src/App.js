import React, { Component } from 'react';
import './App.css';
import visibleContacts from './contacts.json';
import Contacts from './Components/Contacts';

class App extends Component {
  state = {
    firstVisibleContacts: visibleContacts.slice(0, 5),
  };
  //get a random contact
  randomHandler = () => {
    const contactsCopy = this.state.firstVisibleContacts;
    const randomIndex = Math.floor(Math.random() * visibleContacts.length);
    const randomContact = visibleContacts[randomIndex];

    contactsCopy.push(randomContact);
    this.setState({
      firstVisibleContacts: contactsCopy,
    });
  };
  deleteContactHandler = (id) => {
    console.log('Deleting', id);
    // copy the state to a new variable
    const contactsCopy = this.state.firstVisibleContacts;
    // get the index to be deleted
    const deleteIndex = contactsCopy.findIndex((item) => item.id === id);
    // remove index from the contactsCopy
    contactsCopy.splice(deleteIndex, 1);

    // remove from the API using  post or delete endpoint
    // sets firstVisibleContacts copy to state
    this.setState({
      firstVisibleContacts: contactsCopy,
    });
  };
  sortByName = () => {
    const contactsCopy = this.state.firstVisibleContacts;
    const compare = (a,b) => {
      if(a.name < b.name) {
        return -1
      }
      if (a.name > b.name) {
        return 1
      }
      return 0
    }
    const sortResult = contactsCopy.sort(compare)
    this.setState({
      firstVisibleContacts: sortResult
    })
  }
  render() {
    return (
      <div>
        <header>
          <h1>IronContacts</h1>
          <button onClick={this.randomHandler}>Add Random Contact</button>
          <button onClick={this.sortByName}>Sort by name</button>
          <button onClick={this.randomHandler}>Sort by popularity</button>
          {this.state.firstVisibleContacts.map((item) => {
            return (
              <Contacts
                key={item.id}
                {...item}
                clickToDelete={() => this.deleteContactHandler(item.id)}
              />
            );
          })}
        </header>
      </div>
    );
  }
}

export default App;
