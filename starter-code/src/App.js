import React, { Component, Fragment } from 'react';
import './App.css';
import contacts from './contacts.json'
import Contact from './components/Contact'


class App extends Component {
  state = {
  }
   componentWillMount(){
    let home = []
    for(let i = 0; i < 5; i++){
      home.push(contacts[i])
    }
    this.setState({contacts:home})
    }
  
    addRandom =()=> {
    let randomContact = contacts[Math.floor(Math.random()*contacts.length)+5]
    let currentContacts = this.state.contacts
    currentContacts.push(randomContact)
    this.setState({
      contacts:currentContacts
      })
    }
    
    compare = (a,b, query="popularity", order=1) => {
      if(a[query] < b[query]) return order
      if(a[query] > b[query]) return -order
      return 0
    }

    sortName = () => {
      let currentContacts = this.state.contacts
      currentContacts.sort((a, b)=>this.compare(a, b, "name", -1))
      this.setState({
        contacts:currentContacts
      })
    }
     
    sortPopularity = () => {
      let currentContacts = this.state.contacts
      currentContacts.sort((a, b)=>this.compare(a, b))
      this.setState({
        contacts:currentContacts
      })
    }
  
  deleteFunc = e => {
    let currentContacts = this.state.contacts
    currentContacts.splice(e.currentTarget.name,1)
    this.setState({
      contacts:currentContacts
    })
  }

   drawContacts = () => {
    const {contacts} = this.state
    return contacts.map((contact,index)=><Contact key={index} arrayPosition={index} deleteFunc={this.deleteFunc} {...contact}/>)
  }
   
   render() {
    const {addRandom, sortName, sortPopularity} = this
    return (
      <Fragment>
      <h1>Iron Contacts</h1>
      <button onClick={addRandom}>Add Random</button>
      <button onClick={sortName}>Sort by name</button>
      <button onClick={sortPopularity}>Sort by popularity</button>
      {this.drawContacts()}
    </Fragment>
  )
}
}

export default App;
