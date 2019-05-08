import React, { Component } from 'react';
import './App.css';
import contacts from './contacts'
import Datos from './Datos'
import "antd/dist/antd.css";
import {Button} from 'antd'

//Iteración 1
class App extends Component {
  contactsSliced = contacts.slice(0, 5)
  state={
    data: this.contactsSliced
  }
  
//Iteración 2
  addContact = () => {
    const newContacts = [...this.state.data]
    const filterContacts = contacts.filter(el => !newContacts.includes(el))
    const contact = 
      filterContacts[Math.floor(Math.random() * filterContacts.length)]
      if(filterContacts.length === 1) {
        return
      } else {
        newContacts.push(contact)
      }
      this.setState({data: newContacts})
  }

//Iteración 3

  sortName = () => {
    const newContacts = [...this.state.data]
    const sortContacts = newContacts.sort((a, b) =>
      a.name < b.name ? -1 : 1
      )
      console.log(sortContacts)
      this.setState({data: sortContacts})
  }

  sortPopularity = () => {
    const newContacts = [...this.state.data]
    const sortContacts = newContacts.sort ((a,b) => 
    a.popularity < b.popularity ? -1 : 1
    )
    this.setState({data: sortContacts})
  }

//Iteración 4
removeContact = (e) => {
  const newContacts = this.state.data
  newContacts.splice(e, 1);
  this.setState({data: newContacts})
}


  render() {
    return (
      <div className="container">
        <Button style={{margin: '30px'}} type="primary" onClick={this.addContact}>Add random contact</Button>
        <Button style={{margin: '30px'}} type="primary" onClick={this.sortName}>Sort by name</Button>
        <Button style={{margin: '30px'}} type="primary" onClick={this.sortPopularity}>Sort by popularity</Button>
        {this.state.data.map((el, index) => {
          return (
            <Datos 
            key={index}
            {...el}
            Delete={() => this.removeContact(index)}
            />
          )
        })}
      </div>
    );
  }
}

export default App;