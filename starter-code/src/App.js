import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Contacts from './contacts.json'
import Table from './components/stateless/Table'


class App extends Component {
  
  constructor(){
    // console.log(Contacts[0])
    super()
    
    this.state = {
      contacts:Contacts.slice(0,5)}
    
}  
  addContact = () => {
    
    const listContact = [...this.state.contacts]
    
    listContact.push(Contacts[Math.floor(Math.random() * (Contacts.length -1))])
    
    this.setState({
      contacts: listContact  
  })
  }
  sortNameContact = () => {
    
    const listContact = [...this.state.contacts]
    
    listContact.sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
    
this.setState({
      contacts: listContact  
  })
  }

  sortPopularityContact = () => {

    const listContact = [...this.state.contacts]

    listContact.sort(function(a, b) {
      return b.popularity - a.popularity
    });

    this.setState({
      contacts: listContact  
  })

  }

  deleteContact = contactIdx => {
    const listContact = [...this.state.contacts]

    listContact.splice(contactIdx,1)
    
    this.setState({
      contacts: listContact  
  })



  }

  
  
  render() {
    console.log(this.state)
    return (
      <section>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
      
      <h1>IRONCONTACTS</h1>

      <button onClick={this.addContact}>Add Random Contact</button>

      <button onClick={this.sortNameContact}>Sort by name</button>

      <button onClick={this.sortPopularityContact}>Sort by popularity</button>
      
      <hr></hr> 
      
      {this.state.contacts.map((contact, idx) => <Table key={idx} deleteContact={() => this.deleteContact(idx)} {...contact} />)}


      </section>
    );
  }
  
}

export default App;
