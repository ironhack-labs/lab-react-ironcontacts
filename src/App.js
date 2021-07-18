import React from 'react';
import './App.css';
import contacts from "./contacts.json";


class App extends React.Component {
  state = {
    ironContacts : contacts.slice(0,5)
  }

//adding new random contact - second iteration

addRandomContact = () => {

  let newContact = '';
  const randomIndex = Math.floor(Math.random() * contacts.length -1)

  // Call Index upon Array
  newContact = contacts[randomIndex]
  this.setState(state => {
    return {
      ironContacts: [...state.ironContacts, newContact]
    }
  })
}

// sorted by popularity iteration 3

sortedByPopularity = () => {
  const sortedByPopularity = this.state.ironContacts.sort((a,b) => {
    return b.popularity-a.popularity    
  });

  this.setState(state => ({
    ironContacts:[...sortedByPopularity]
  }))
}

// sorted by name iteration 3

sortedByName = () => {

// "this state" refers to the state of the object APP
// and then we access the ironContacts(Array) and call metho sort on them (a.b. are Objects)
  const sortedByName = this.state.ironContacts.sort((a,b) => {
    //console.log(a);
    return a.name.localeCompare(b.name)   
  })
  // Set is set to: Array sorted by name 
  this.setState(state => ({
  // Over write (unsorted Array) with sortedByName
    ironContacts:[...sortedByName]
  }))
}

// delete

deleteContact = (index) => {

  const ActorsCopy = [...this.state.ironContacts]
  ActorsCopy.splice(index,1)
  this.setState(state =>({
  ironContacts:[...ActorsCopy]
  }
))
} 

  //Iteration 1 | Display 5 Contacts
  render() {
    const renderedContacts = this.state.ironContacts.map((contact, index) => {
  
  return (
  
      <tr>
          <td>
            <img src={contact.pictureUrl} width='50' alt="logo" ></img>
          </td>
          <td>{contact.name}</td>
          
          <td>{contact.popularity}</td>

          <td>
            <button onClick={() => this.deleteContact(index)} className="delete-buton">delete</button>
          </td>
          
      </tr>
    
  )
  }
    )
    return(
      <>
      <h1 className="h1-display">Contacts IRONHACK</h1>

      {/* button of the secon iteration adding contact */}
      <button onClick={this.addRandomContact} className="buton-add">Add Random Contact</button>
      <button onClick={this.sortedByPopularity} className="buton-sort">Sort by name</button>
      <button onClick={this.sortedByName} className="buton-sort">Sort by popularity</button>

      <table className="tabla-display">
          <thead>
              <tr>
                  <td>Picture</td>
                  <td>Name</td>
                  <td>Popularity</td>
                  <td>Remove</td>
              </tr>
          </thead>

          <tbody>
              {renderedContacts}
          </tbody>
      </table>
    </>

    )
}

}

export default App;
