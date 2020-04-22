import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'

class App extends Component {
  state = {
    contactsShowing: contacts.splice(0, 5), // 0,1,2,3,4
    remainingContacts: contacts // 5-199
  }

  displayFive = () => {
    return this.state.contactsShowing.map((eachContact, index) => { // map() method creates a copy of the array and executes a function on each element.
      return (
      <tr key={eachContact.name}>
      <td><img width="50 px" src={eachContact.pictureUrl} alt={eachContact.name}/></td>
      <td>{eachContact.name}</td>
      <td>{eachContact.popularity}</td>
      <td><button onClick={()=>this.deleteContact(index)}>Delete</button></td>
      </tr>
      )
    })
  }

  deleteContact = (index) => {
    let contactsShowingCopy = [...this.state.contactsShowing]
    contactsShowingCopy.splice(index,1)
    this.setState({
      contactsShowing: contactsShowingCopy
    })
  }


  addRandoContact = () => {
    if(this.state.remainingContacts.length){
    let randoNum = Math.floor(Math.random()*this.state.remainingContacts.length)
    let randomContact = this.state.remainingContacts[randoNum]
    
    let contactsShowingCopy = [...this.state.contactsShowing]
    contactsShowingCopy.push(randomContact)

    let remainingContactsCopy = [...this.state.remainingContacts]
    remainingContactsCopy.splice(randoNum, 1)

    this.setState({ 
      contactsShowing: contactsShowingCopy,
      remainingContacts: remainingContactsCopy,
      name:"Alberto" 
    })
   }
  }

  sortName = () => {
    let contactsShowingCopySorted = [...this.state.contactsShowing].sort((a,b)=>a.name.localeCompare(b.name)) // localeCompare() is for strings
    this.setState({
      contactsShowing: contactsShowingCopySorted
    })
  }

  sortPopularity = () => {
    let contactsShowingCopySorted = [...this.state.contactsShowing].sort((a,b)=>b.popularity - a.popularity)
    this.setState({
      contactsShowing: contactsShowingCopySorted
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
      <h1>IronContacts</h1>
      <button onClick={this.sortPopularity}>Sort by Popularity</button>
      <button onClick={this.sortName}>Sort by Name</button>
      <button onClick={this.addRandoContact}> Add Random</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
              {this.displayFive()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
