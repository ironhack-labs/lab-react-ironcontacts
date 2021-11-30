import React, { Component } from 'react'
import contacts from '../../contacts.json';

const newArray=  [...contacts]
const filterfive = contacts.slice(0,5)
const leftContacts = newArray.slice(5, -1)

class ContactList extends Component {
  constructor() {
    super()

    this.state = {
        leftContacts:leftContacts,
      contacts: filterfive
    }
  }

  randomContacts(){

    let randomNumber = Math.floor(Math.random()*leftContacts.length);
    let copyArray = [...this.state.contacts]
     
    copyArray.push(this.state.leftContacts[randomNumber])
    console.log(copyArray)
    //leftContacts.splice(randomNumber, 1)

    this.setState({
        contacts: copyArray
    })
  }
  
  sortNames (){
    let newCopyNames = [...this.state.contacts]
    let sortyArray = newCopyNames.sort((a,b) => {
        if(a.name > b.name){
                return 1;
            }
            if (a.name < b.name) {
                return -1;
            }

            return 0;
        });

        this.setState({
            contacts: sortyArray
        })
    }
  
    sortPopularity (){
    let newPopularity = [...this.state.contacts]
    let sortyArray = newPopularity.sort((a,b) => {
        if(a.name > b.name){
                return 1;
            }
            if (a.name < b.name) {
                return -1;
            }

            return 0;
        });

        this.setState({
            contacts: sortyArray
        })
    }
  
    removeContact(contactID) {

    const newContacts = this.state.contacts.filter(contact => contact.id !== contactID)

    this.setState({
      contacts: newContacts
    })
  }

  render() {
    

      return ( 
      
    <>
      <button onClick={()=>this.randomContacts()}>Add Random Contact</button>
      <button onClick={()=>this.sortNames()}>Sort by name</button>
      <button onClick={()=>this.sortPopularity()}>Sort by popularity</button>
      
      
      <table>
     
      
        <thead>
        <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
        </tr>
        </thead>
    
    {this.state.contacts.map((eachContact) => (
      <tbody key={eachContact.id}>
      <tr>
        <td><img width = "100" src={eachContact.pictureUrl} alt="images"/> </td>
        <td>{eachContact.name} </td>
        <td>{eachContact.popularity} </td>
        <td><button onClick ={() =>this.removeContact(eachContact.id)}>Delete</button> </td>
      </tr>
        
      </tbody>
    ))}
</table>
    </>
        
    ) 
    
    }

}

export default ContactList

