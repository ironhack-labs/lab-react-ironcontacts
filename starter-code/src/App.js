import React, { Component } from 'react';
import './App.css';
import contacts from "./contacts.json";
import CardContact from './components/CardContact';
import FlexContainer from './layout/FlexContainer';

class App extends Component {

  

  
  state = {
    contacts: contacts,
    starterList: [...contacts.slice(0, 5)]
  }

  
  handleAddContactClick = () => {
    let maxRand = this.state.contacts.length;
    let minRand = this.state.starterList.length + 1
    let rand = Math.floor(Math.random() * (maxRand - minRand) + minRand);
    
    let newContactList = [...this.state.starterList];
    newContactList.push(this.state.contacts[rand]);
    
    this.setState({starterList: newContactList});
    
  }

  handleSortClick = () => {
    let sortedContacts = [...this.state.starterList];
    sortedContacts.sort(function(a, b) {
      if(a.name > b.name) return 1;
      if(a.name < b.name) return -1;

      return 0;
    });

    this.setState({starterList: sortedContacts});

  }

  handleSortByPopClick = () => {
    let sortedBypop = [...this.state.starterList];
    sortedBypop.sort(function(a, b) {
      if(a.popularity > b.popularity) return -1;
      if(a.popularity < b.popularity) return 1;

      return 0;
    });

    this.setState({starterList: sortedBypop});
  }

  handleDeleteContact = (indexContact) => {
    let newStarterList = [...this.state.starterList];
    newStarterList.splice(indexContact, 1);
    this.setState({starterList: newStarterList});
  }

  render() {
    let contactJSX = this.state.starterList.map((contact, index) =>
      <CardContact picture={contact.pictureUrl} 
        name={contact.name}
        popularity={contact.popularity} index={index.toString()} 
        delete={this.handleDeleteContact}
      />
    );

    return (
      <div className="App">
        <FlexContainer>
          <h1>Iron Contacts</h1>
        </FlexContainer>
        <FlexContainer>
          <div className="buttons">
            <button onClick={this.handleAddContactClick} >Add Random Contact</button>
            <button onClick={this.handleSortClick} >Sort by name</button>
            <button onClick={this.handleSortByPopClick} >Sort by popularity</button>
          </div>
        </FlexContainer>
        <FlexContainer>
          <div className="row-headers">
            <h2>Picture</h2>
            <h2>Name</h2>
            <h2>Popularity</h2>
          </div>
        </FlexContainer>
        {contactJSX}
      </div>
    );
  }
}

export default App;
