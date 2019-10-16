import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';

class App extends Component {
  state = {
    myContacts: contacts.slice(0, 5)
  }

  addRandomContact = () => {
    if (this.state.myContacts.length < 200) {
      this.setState({
        myContacts: [...this.state.myContacts, contacts[this.state.myContacts.length]]
      });
    }  
  }

  sortByName = () => {
    this.setState({
      myContacts: this.state.myContacts.sort((a, b) => {
        return a.name.localeCompare(b.name);
      })
    });
  }

  sortByPopularity = () => {
    this.setState({
      myContacts: this.state.myContacts.sort((a, b) => {
        return a.popularity - b.popularity;
      })
    });
  }

  deleteContact = (index) => {
    this.state.myContacts.splice(index, 1);
    this.setState({
      myContacts: this.state.myContacts
    });
  }

  render() {
    return (
      <div className="App">
        <h1 className="app-header">IronContacts</h1>

        <div className="btns-container">
          <button className="myBtn" onClick={this.addRandomContact}>Add Random Contact</button>
          <button className="myBtn" onClick={this.sortByName}>Sort by name</button>
          <button className="myBtn" onClick={this.sortByPopularity}>Sort by popularity</button>
        </div>

        <div className="contacts-container">
          <div className="contacts-container__row">
            <h5 className="contacts-container__row--header">Picture</h5>
            <h5 className="contacts-container__row--header">Name</h5>
            <h5 className="contacts-container__row--header">Popularity</h5>
            <h5 className="contacts-container__row--header">Action</h5>
          </div>

          {this.state.myContacts.map((currentActor, index) => {
            return (
               <div className="contacts-container__row" key={index}>
                <img className="contacts-container__row--img" src={currentActor.pictureUrl} alt="Actor"/>
                <p className="contacts-container__row--name">{currentActor.name}</p>
                <p className="contacts-container__row--popularity">{currentActor.popularity.toFixed(2)}</p>
                <button className="btn-delete" onClick={() => this.deleteContact(index)}>Delete</button>
              </div>
            )     
          })}
        </div>
      </div>
    );
  }
}

export default App;
