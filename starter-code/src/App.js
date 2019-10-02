import React, { Component } from 'react'
import contacts from './contacts.json'
import './App.css';
import Button from './Button'

class App extends Component {
  state = {
    showContacts : contacts.splice(0,5),
    restContacts : contacts 
  } 

  getContacts = () => {
      let contactArray = this.state.showContacts.map((thisContact,i) => {
        return <div><img width="25px" height="40px" src={thisContact.pictureUrl}/> &nbsp; {thisContact.name} &nbsp; {thisContact.popularity} <Button onClick={()=>this.deleteContact(i)}>Delete</Button></div>
      })
      return contactArray
    }



  getRandomContact = () => {
    let contactsCopy = [...this.state.showContacts]
    let randomContactIndex = Math.floor(Math.random()*(contacts.length))
    contactsCopy.push(contacts[randomContactIndex]);
    contactsCopy.splice(randomContactIndex,1)
    this.setState({
      showContacts: contactsCopy
    })

    console.log(this.state.showContacts);
  }

 sortContacts = () =>{
   let contactsCopy = [...this.state.showContacts]
   let sorted = contactsCopy.sort((a,b) =>{
    if(a.name < b.name){
      return -1
    }
    if(a.name > b.name){
      return 1
    }
   })
   this.setState({
    showContacts: sorted
  })
 }
 sortPop = () =>{
  let contactsCopy = [...this.state.showContacts]
  let sorted = contactsCopy.sort((a,b) =>{
   if(a.popularity < b.popularity){
     return 1
   }
   if(a.popularity > b.popularity){
     return -1
   }
  })
  this.setState({
   showContacts: sorted
 })
}
 deleteContact = (i) =>{
   console.log('delete',i)
   let contactsCopy = [...this.state.showContacts]
   contactsCopy.splice(i,1)
   this.setState({
    showContacts: contactsCopy
  })
 }



  render() {
    return (
      
      <div> 
        <h1>Iron Contacts</h1>
        <Button onClick={this.getRandomContact}>Add Random Contact</Button>
        <Button onClick={this.sortContacts}>Sort by Name</Button>
        <Button onClick={this.sortPop}>Sort by Popularity</Button>
        <div className="flex-inline">
        <p>Picture &nbsp;</p>
        <p>Name&nbsp;</p>
        <p>popularity&nbsp;</p>
      </div>
        <div id="contactList">
        {this.getContacts()}
        </div>
      </div>
    )
  }
}



export default App;
