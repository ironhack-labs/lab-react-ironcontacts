import React, { Component } from 'react';

import './App.css';
import contacts from './contacts.json'

import Contact from './components/stateless/Contact'
import Title from './components/stateless/Title'

class App extends Component {

  constructor(){
    super()
    this.state = {
      contacts: contacts.splice(0,5)
    }
  }

  clickHandler=()=>{
    const randomContacts = Math.floor(Math.random()*contacts.length)
    contacts[randomContacts]
    console.log(contacts[randomContacts])
    
    let newContacts = this.state.contacts
    newContacts.push(contacts[randomContacts])
    this.setState({contacts: newContacts})
  }

  sortByName=()=>{

    let newContacts=this.state.contacts.sort(function(a,b){
      if(a.name>b.name){
        return 1
      }
      if(a.name<b.name){
        return -1
      }
      return 0
    })
    this.setState({contacts: newContacts})

  }
  sortByPopularity=()=>{

    let newContacts=this.state.contacts.sort(function(a,b){
      if(a.popularity>b.popularity){
        return 1
      }
      if(a.popularity<b.popularity){
        return -1
      }
      return 0
    })
    this.setState({contacts: newContacts})

  }

  deleteContact = (contactIndex) => {
    const contactsCopy = [...this.state.contacts]
    contactsCopy.splice(contactIndex, 1)
    this.setState({
        contacts: contactsCopy
    })
  }
  
  render() {
    console.log(this.state)
    return (
   

      <main>
        <section className="contactos">

        <div>
        <Title text="Lista de contactos" />
        <button onClick={this.clickHandler}>Add Random Contact</button>     
        <button onClick={this.sortByName}>Sort By Name</button>     
        <button onClick={this.sortByPopularity}>Sort By Popularity</button>     
          <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
           </tr>

          {this.state.contacts.map((contact,index) =>{
            return <Contact key={index} {...contact} deleteContact={() => this.deleteContact(index)} />          
          })}

          </table>
         
        </div>

        </section>
      </main>
    ) 
  }
}

export default App;
