import React, { Component } from 'react';
import contacts from './contacts.json'
import './App.css';

class App extends Component {

  state = {
    contactsShowing: contacts.splice(0,5),
    remainingContacts: contacts,
  }


  displayFive = () => {
    console.log(this.state.contactsShowing)
    
    return this.state.contactsShowing.map((eachContact, index) => {
      return (
      <tr key={eachContact.name}>
        <td><img width="85px" src={eachContact.pictureUrl} alt={eachContact.name}/></td>
        <td>{eachContact.name} {index}</td>
        <td>{eachContact.popularity}</td>
        <td><button onClick={()=>this.deleteContact(index)}> Delete </button></td>
      </tr>
      )

    })
    
  }

  deleteContact = (index) => {
    let contactsShowingCopy = [...this.state.contactsShowing]
    contactsShowingCopy.splice(index,1)
    this.setState({constactsShowing:contactsShowingCopy})
  }
  
  
addRandoContact = () => {
  if(this.state.remainingContacts.length>-1){
  let randoNum = Math.floor(Math.random()*this.state.remainingContacts.length)
  let randomContact = this.state.remainingContacts[randoNum]

  let contactsShowingCopy = [...this.state.contactsShowing]
  contactsShowingCopy.push(randomContact)

  let remainingContactsCopy = [...this.state.remainingContacts]
  remainingContactsCopy.splice(randoNum,1)

  this.setState({
    contactsShowing:contactsShowingCopy,
    remainingContacts: remainingContactsCopy
  })
}}

sortName = () => {
  let contactsShowingCopySorted = [...this.state.contactsShowing].sort((a,b)=>a.name.localeCompare(b.name))
  this.setState ({
    contactsShowing:contactsShowingCopySorted
  })
}

sortPop = () => {
  let contactsShowingCopySorted = [...this.state.contactsShowing].sort((a,b)=>b.popularity-a.popularity)
  this.setState ({
    contactsShowing:contactsShowingCopySorted
  })
}



  render() {
    return (
      <div className="App">
      <h1>IronContacts</h1>
        <button onClick={this.addRandoContact}> Add Random Contact</button>
        <button onClick={this.sortName}> Sort By Name</button>
        <button onClick={this.sortPop}> Sort By Popularity</button>

          <table id="table" border="1">
            <thead>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>Delete Contact</th>
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
