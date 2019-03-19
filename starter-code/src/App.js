import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'
import Thead from './components/Thead'
import Tbody from './components/Tbody'

class App extends Component {
  constructor() {
      // sin presencia del método super(), this retornará undefined. Es obligatorio.
      super()
      this.state = { myContacts: contacts.filter((contact, idx) => idx < 5) }
  }

  // Handlers
  addContactHandler = () => {
      const contactsCopy = [...this.state.myContacts]     // hacemos una copia del Array para no manipoular el estado original
      const randomContact = contacts[Math.floor(Math.random() * (contacts.length - 1))]
      contactsCopy.push(randomContact)
      this.setState({ myContacts: contactsCopy })
  }

  sortContactNameHandler = () => {
    const contactsCopy = [...this.state.myContacts]     // hacemos una copia del Array para no manipoular el estado original
    contactsCopy.sort((a, b) => {
        if (a.name > b.name) { return  1; }
        if (a.name < b.name) { return -1; }
        // a must be equal to b
        return 0;
    })
    this.setState({ myContacts: contactsCopy })
  }

  sortContactPopularityHandler = () => {
    const contactsCopy = [...this.state.myContacts]     // hacemos una copia del Array para no manipoular el estado original
    contactsCopy.sort((a, b) => b.popularity - a.popularity)
    this.setState({ myContacts: contactsCopy })
  }

  // Handlers
  deleteContactHandler = contactIndex => {
    const contactsCopy = [...this.state.myContacts]     // hacemos una copia del Array para no manipoular el estado original
    contactsCopy.splice(contactIndex, 1)
    this.setState({ myContacts: contactsCopy })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h2>IronContacts</h2>
        <button onClick={this.addContactHandler} className="custom-button button">Add Random Contact</button>
        <button onClick={this.sortContactNameHandler} className="custom-button button">Sort By Name</button>
        <button onClick={this.sortContactPopularityHandler} className="custom-button button">Sort By Popularity</button>
        <table>
            <Thead />
            {
                this.state.myContacts.map((oneContact, index) => {
                    return <Tbody
                        // Todos los componentes que sean resultado de una iteración requieren un key único para cada item
                        key={index}
                        {...oneContact}
                        clickToDelete={() => this.deleteContactHandler(index)}    // Transferimos un método a un componente como un atributo
                    />
                })
            }
        </table>
      </div>
    );
  }
}

export default App;
