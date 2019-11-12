import React, { Component } from 'react'
import contacts from './contacts.json'
import './App.css';
import Button from './Button'
let value = true;
class App extends Component {
  state = {
    showContacts : contacts.splice(0,5),
    restContacts : contacts 
  } 

  getContacts = () => {
      let contactArray = this.state.showContacts.map((thisContact,i) => {
        return (
          <div>
            <span id="image">
            <img width="40px" height="65px" src={thisContact.pictureUrl} alt="celeb"/>
            </span>

            <span id="name">
            &nbsp; {thisContact.name}
            </span>

            <span id="popularity">
             &nbsp; {thisContact.popularity} 
            </span>

            <span id="button">
             <Button onClick={()=>this.deleteContact(i)}>Delete</Button>
             </span>
             
          </div>
        )
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
   
   if (value){
   let sorted = contactsCopy.sort((a,b) =>{
    if(a.name < b.name){
      return -1
    }
    if(a.name > b.name){
      return 1
    }
   })

    value = false;
   this.setState({
    showContacts: sorted
  })
  
}



   else{
   let sorted = contactsCopy.sort((a,b) =>{
    if(a.name < b.name){
      return 1
    }
    if(a.name > b.name){
      return -1
    }
   })

    value = true;
   this.setState({
    showContacts: sorted
  })

 }

 
 }



 sortPop = () =>{
  let contactsCopy = [...this.state.showContacts]

  if(value){
  let sorted = contactsCopy.sort((a,b) =>{
   if(a.popularity < b.popularity){
     return 1
   }
   if(a.popularity > b.popularity){
     return -1
   }
  })
  value = false;
  this.setState({
   showContacts: sorted
 })
}



else{
  let sorted = contactsCopy.sort((a,b) =>{
   if(a.popularity < b.popularity){
     return -1
   }
   if(a.popularity > b.popularity){
     return 1
   }
  })
  value = true;
  this.setState({
   showContacts: sorted
 })
}

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
      
      <div id="menu"> 
        <h1>Iron Contacts</h1>
        <Button onClick={this.getRandomContact}>Add Random Contact</Button>
        <Button onClick={this.sortContacts}>Sort by Name</Button>
        <Button onClick={this.sortPop}>Sort by Popularity</Button>
        <div className="flex-inline">
        <p>Picture &nbsp;</p>
        <p>Name&nbsp;</p>
        <p>Popularity&nbsp;</p>
      </div>
        <div id="contactList">
        {this.getContacts()}
        </div>
      </div>
    )
  }
}



export default App;