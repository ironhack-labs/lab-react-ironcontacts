import React, { Component } from 'react';
// import logo from './logo.svg';
import Contact from './components/Contact';
import contacts from './data/contacts.json';
import { sortByName } from './helpers';
import { sortByPop } from './helpers';

import './App.css';

// const myContacts = contacts.slice(0, 5);

class App extends Component {

  state = {
    myContacts: contacts.slice(0,5),
  }

  addRandomContact = (event) =>{
    const lengthContacts = contacts.length;
    const randomContact = contacts[Math.floor(Math.random() * lengthContacts)];
    this.setState({
      myContacts: [...this.state.myContacts,randomContact]
    })
  }

  sortAlpha = (event) =>{
    //Siempre es mejor crear una copia a partir del array original
    const orderedContacts = [...this.state.myContacts]
    //Separamos la funcion sortByName en otro archivo
    orderedContacts.sort(sortByName)
    this.setState({
      myContacts: orderedContacts
    }, () => {
      //this.seState tiene un callback que podemos uilizar
      console.log(this.state.myContacts)  
    })
  }

  sortPop = (event) => {
    const orderedContacts = [...this.state.myContacts]
    orderedContacts.sort(sortByPop)
    this.setState({
      myContacts: orderedContacts
    }, () => {
      //this.seState tiene un callback que podemos uilizar
      console.log(this.state.myContacts)  
    })
  }

  delete = (index) => {
    console.log(index);
    this.state.myContacts.splice(index, 1);
    console.log(this.state);
    this.setState({
      myContacts: [...this.state.myContacts],
    })
  }

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={this.addRandomContact}>Add random contact</button>
        <button onClick={this.sortAlpha}>Sort by name</button>
        <button onClick={this.sortPop}>Sort by popularity</button>
        <ul>
          { this.state.myContacts.map((contact, index) => {
            return < Contact 
            img= { contact.pictureUrl} 
            name={contact.name} 
            key= {index}
            popularity= {contact.popularity}
            deleteContact = { this.delete }
          />
          }) }
        </ul>
      </div>
    );
  }
}

export default App;
