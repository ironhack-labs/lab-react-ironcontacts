
import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
import ContactCard from './components/ContactCard/ContactCard'


export default class App extends Component {
  state={
    currentContacts:contacts.slice(0,5),
    leftContacts:contacts.slice(5)
  }
  addContact=()=>{
    const contactsCount = this.state.leftContacts.length;
    const randomIndex = Math.floor(Math.random()*contactsCount);
    const randomContact = this.state.leftContacts[randomIndex];
    // console.log(randomContact);
    this.setState({currentContacts:[...this.state.currentContacts,randomContact]});

    const newleftContacts = this.state.leftContacts.filter((contact)=>{
      if(contact!==randomContact){
        return true
      }else{
        return false
      }
    })
    this.setState({leftContacts:newleftContacts});
  }
  
  sortByName=()=>{
    const contactsSortedByName =this.state.currentContacts.sort((contactA,contactB)=>{
      return contactA.name.localeCompare(contactB.name)
    })
    this.setState({currentContacts:contactsSortedByName})
  }

  sortByPopularity=()=>{
    const contactsSortedByPopularity =this.state.currentContacts.sort((contactA,contactB)=>{
      return contactB.popularity-contactA.popularity
    })
    this.setState({currentContacts:contactsSortedByPopularity})

  }

  deleteContact=(contactId)=>{
    const filteredContacts = this.state.currentContacts.filter((contact)=>{
      if(contact.id!==contactId){
        return true
      }else{
        this.setState({leftContacts:[...this.state.leftContacts,contact]})
        return false
      }
    })

    this.setState({currentContacts:filteredContacts})

    

  }

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={this.addContact}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPopularity}>Sort by popularity</button>
        <div className="wrapper">
          <h4 className='unit'>Picture</h4>
          <h4 className='unit'>Name</h4>
          <h4 className='unit'>Popularity</h4>
          <h4 className='unit'>Action</h4>
        </div>
        {/* {console.log(this.state.leftContants)} */}
        {this.state.currentContacts.map((contact)=>{
          return(
            <ContactCard key={contact.id} {...contact} deleteContact={this.deleteContact}/>
          )
        })}
        
      </div>
    );
  }
}

