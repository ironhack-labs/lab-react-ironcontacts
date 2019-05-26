import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from './components/Contact'
import ContactList from './components/ContactList';
import Button from './components/Button'
import contacts from './data/contacts.json'

class App extends Component {
  //definimos el estado
  state = {
    //devolvemos solo 5
    AllContactList: contacts.map( (item, i) => {
      return ( 
          <Contact contact={item} key={i}/>
      )
    }).splice(0,5)
  }
  //retornamos el item de contactos
  list = contacts.map( (item, i) => {
    return ( 
        <Contact contact={item} key={i}/>
    )
  })


  //Botón para añadir contactos Random
  addContact = (contact => {
    this.setState({
      AllContactList: [...this.state.AllContactList, contact]
    })
  })

  filterContacts = (contacts => {
    this.setState({
      AllContactList: contacts
    })
  })
  //eliminamos contactos de la lista
  deleteContacts = (contacts => {
    this.setState({
      AllContactList: contacts
    })
  })

  render() {
    return (
      <div className="App">
        <Button buttonState="1" 
          function={this.addContact} 
          contacts={this.list} 
          addContacts={this.state.AllContactList} 
          children="Añadir contacto"/>

        <Button buttonState="2" 
          function={this.filterContacts} 
          addContacts={this.state.AllContactList} 
          children="Filtrar por nombre" />

        <Button buttonState="3" 
          function={this.filterContacts} 
          addContacts={this.state.AllContactList} 
          children="Filtrar por popularidad" />
        
        <ContactList contacts={this.list} 
          addContacts={this.state.AllContactList}/>
      </div>
    );
  }
}

export default App;
