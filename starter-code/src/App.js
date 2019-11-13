import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contactsJson from './contacts'
console.log(contactsJson.length)



class App extends Component {

  state = {
    style: {},
    contacts: contactsJson.splice(0,5),
    restOfContacts: contactsJson
  }

  componentDidMount(){
    setInterval(() => this.changeColor(),1000)
  }
  changeColor = () => {
    this.setState({
      style: {backgroundColor:"#"+((1<<24)*Math.random()|0).toString(16)}
    })
  }


  showContacts = () => {
    return this.state.contacts.map((eachContact, i)=> {
      return ( 
        <li key={i}>
          <h2>{eachContact.name} {eachContact.popularity}</h2>
          <img src={eachContact.pictureUrl} width='100px'/>
          <button onClick={() => this.delete(i)}>Delete</button>
        </li>
      )
    })
  }

  delete = (index) => {
    let newContacts = [...this.state.contacts]
    newContacts.splice(index, 1)
    this.setState({ contacts: newContacts})
  }

  addRandomContact = () => {

    let newContacts = [ ...this.state.contacts ]
    
    let randomIndex = Math.floor(Math.random()*this.state.restOfContacts.length)
    
    let randomContact = this.state.restOfContacts[randomIndex]

    let newRestOfContacts = [ ... this.state.restOfContacts ] 

    newRestOfContacts.splice(randomIndex, 1) 

    newContacts.push(randomContact)

    this.setState({
      contacts:newContacts,
      restOfContacts:newRestOfContacts
    })
  }

  sortByName = () => {
    let newContacts = [...this.state.contacts]
    let sortedContacts = newContacts.sort((a,b)=>{
      if(a.name > b.name) {
        return 1
      }
      if(a.name < b.name){
        return -1 
      }
      return 0 
    })
    this.setState({
      contacts:sortedContacts
    })
  }
  sortByPopularity = () => {
    let newContacts = [...this.state.contacts]
    let sortedContacts = newContacts.sort((a,b)=>{
      if(a.popularity > b.popularity) {
        return 1
      }
      if(a.popularity < b.popularity){
        return -1 
      }
      return 0 
    })
    this.setState({
      contacts:sortedContacts
    })
  }

  sortThem = (kind, order) =>  this.setState({ contacts: [...this.state.contacts].sort((a,b) => a[kind] - b[kind])})

  

  render() {
   
    return (
      <div className="App" style={this.state.style}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button onClick={this.addRandomContact}>Add Random Contact</button>
        <button onClick={this.sortByName}>Name</button>
        <button onClick={this.sortByPopularity}>Popularity</button>
        <button onClick={() => this.sortThem('popularity', 1)}>Popularity?</button>

        {this.showContacts()}
      </div>
    );
  }
}

export default App;