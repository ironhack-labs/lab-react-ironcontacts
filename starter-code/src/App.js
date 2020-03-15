import React, { Component } from 'react';
import data from './contacts.json'
import IronContacts from './ironContacts/IronContacts'
import './App.css';

//add stars prop to each contact (just to make stars)
const contacts = data.map(user => {
  const pop = Math.round(user.popularity)
  let stars = 0
  pop > 15 ? stars = 5 
  : (pop <= 15 && pop > 9)? stars = 4 
  : (pop <= 9 && pop > 7)? stars = 3
  : (pop <= 7 && pop > 6)? stars = 2 
  : (pop <= 6 && pop > 4)? stars = 1 
  : stars = 0

  return {...user, stars}
})


class App extends Component {
  
  state = {
    allContacts: contacts,
    contacts: contacts.splice(0,5),
    scrollH: document.getElementById('contacts')
  }
  //=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-===-=-=-=-=-=-=-=-=-=-=-
  addNewContact = () =>{
    const {allContacts, contacts} = this.state
    const userIds = contacts.map(user=> user.id)
    const restOfContacts = allContacts.filter(user=> userIds.indexOf(user.id) === -1)
    const randomUser = restOfContacts[Math.floor(Math.random()*restOfContacts.length)]

    this.setState({
      contacts: [...contacts, randomUser ]
      //scroll bottom
    },()=>  this.scrollH(false))
    

  }
//=-=-=-=-=--==-=-=-==-=-=-=-=-=-===-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
scrollH(condition){
  setTimeout(()=>{
  const elem = document.getElementById('contacts')
  elem.scrollIntoView(condition)
  },50)
}
//=-=-=-=-=--==-=-=-==-=-=-=-=-=-===-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
sortByName = ()=>{
  // //1.
  // const {contacts} = this.state
  // const sortedContacts = [...contacts].sort((a,b)=> a.name > b.name ? 1: a.name < b.name ? -1 : 0)
  // this.setState({ contacts: sortedContacts})
  // //2.
  this.setState(prevState => ({
    contacts: prevState.contacts.sort((a,b)=> a.name > b.name ? 1: a.name < b.name ? -1 : 0)
  }))
}
//=-=-=-=-=--==-=-=-==-=-=-=-=-=-===-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
sortByPopularity = ()=>{
  // //1.
  // const {contacts} = this.state
  // const sortedContacts = [...contacts].sort((a,b)=> a.popularity < b.popularity ? 1: a.popularity > b.popularity ? -1 : 0)
  // this.setState({ contacts: sortedContacts})
  // //2.
  this.setState(prevState => ({
    contacts: prevState.contacts.sort((a,b)=> a.popularity < b.popularity ? 1: a.popularity > b.popularity ? -1 : 0)
  }))
}
//=-=-=-=-=--==-=-=-==-=-=-=-=-=-===-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
deleteUser = (actor) =>{
  console.log("Output for: App -> deleteUser -> actor", actor)
  // //1.
  // const {id} = e.target
  // const {contacts} = this.state
  // const filteredContacts = [...contacts].filter(user => user.id !== id)
  // this.setState({ contacts: filteredContacts})
  // //2.
  this.setState(prevState => ({
    contacts: prevState.contacts.filter(user => user.id !== actor.id)
  }))

}
//=-=-=-=-=--==-=-=-==-=-=-=-=-=-===-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  render() {
    const {contacts} = this.state
    return (
      <div >
        <IronContacts contacts={contacts} 
        addNewContact={this.addNewContact.bind(this)}
        sortByName={this.sortByName.bind(this)}
        sortByPopularity={this.sortByPopularity.bind(this)}
        //1. deleteUser={this.deleteUser.bind(this)}
        //2. deleteUser={userId => this.deleteUser(userId) }
        //3. Way -->
        deleteUser={this.deleteUser.bind(this)}
        />
      </div>
    );
  }
}

export default App;
