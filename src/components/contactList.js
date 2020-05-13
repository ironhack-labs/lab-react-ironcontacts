import React, { Component } from 'react'
import Contact from './contacts';
import Contacts from './../contacts.json';

class ContactsList extends Component {
  state = {
    contacts: Contacts.slice(0,5),
    showContacts: true
  }

  deleteTheContact = (id) => {
    const updatedContacts = this.state.contacts.filter( (contact) => {
      if (contact.id !== id) return contact;
    });

    this.setState({ contacts: updatedContacts })
  }


sortAlpha = () => {
    const newList = [...this.state.contacts]
    newList.sort(function(a, b){
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
    })
    this.setState({contacts:newList})
  }

  randomContact = () => {
    let inArray 
    let randomC = Contacts[Math.floor(Math.random() * Contacts.length)];
    const newList = [...this.state.contacts]
    
    // look for the randomC id in the array of contacts
    inArray = newList.find(contact => contact.id === randomC.id)
    
    // get a new randomC until randomC.id is not found in newList --> inArray === undefined
    while (inArray !== undefined ){
    randomC = Contacts[Math.floor(Math.random() * Contacts.length)];
    inArray = newList.find(contact => contact.id === randomC.id)
    console.log('inArray :>> ', inArray);
    }

    newList.push(randomC)
    this.setState({contacts:newList}, this.sortAlpha)
}

  

  sortPop = () => {
    const listPop = this.state.contacts.sort(function(a,b){
        return  b.popularity - a.popularity
    })
    this.setState({contacts:listPop})
  }

  render() {

    return (

      <div>
      
        <button 
        onClick={() => { this.randomContact(); }}> Add Random Contact </button>
        <button onClick={this.sortAlpha} > Sort by name </button>
        <button onClick={this.sortPop} > Sort by popularity </button>


      {/* {
        !this.state.showContacts
          ? null
          : <ul> */}
      
            <table>
                <thead>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.contacts.map((contactObj) => {
                        return(
                            <Contact 
                            key={contactObj.id} 
                            {...contactObj}
                            removeContact={this.deleteTheContact}  
                            />)
                    })}
                </tbody>
            </table>    
        </div>
    )
  }
}


export default ContactsList