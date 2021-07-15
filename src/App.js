// import logo from './logo.svg';
import './App.css';
import contacts from "./contacts.json";
import React from 'react';

class App extends React.Component {

  state = {
    ironContacts: contacts.slice(0,5)
  }

// add new contact

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

// sorted by popularity

sortedByPopularity = () => {
  const sortedByPopularity = this.state.ironContacts.sort((a,b) => {
    return b.popularity-a.popularity    
  });
  //console.log(sortedByPopularity);
  this.setState(state => ({
    ironContacts:[...sortedByPopularity]
  }))
}

// sorted by name

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

// The position specifies the position of the first item to delete and the num argument determines the number of elements to delete.
// Delete klicked index of array
// reset state after array has been modified (through deletion)
// Show new array with only 9 contacts (after deleting one)


// display first five contacts

  render() {
    // You call map on an array and it gives you back an array (renderedContacts)
    // map is looping on ironcontact (thats where get data from, then it creates)
    const renderedContacts = this.state.ironContacts.map((contact, index) => {

      return (
        
        <tr>
          <td>{contact.name}</td>
          <td>
            <img src={contact.pictureUrl} width='50' alt="logo" ></img>
          </td>
          <td>{contact.popularity}</td>
          <td>
            <button onClick={() => this.deleteContact(index)}>delete</button>
          </td>
        </tr>
      )
      
    }
    )
    //console.log(renderedContacts);

    return (
      
    <>
          <h1>Contacts IRONHACK</h1>
          <button onClick={this.addRandomContact}>Add Random Contact</button>
          <button onClick={this.sortedByName}>Sort by name</button>
          <button onClick={this.sortedByPopularity}>Sort by popularity</button>

    <table>
     <thead>
       <tr>
          <td>Picture</td>
          <td>Name</td>
          <td>Popularity</td>
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

// export const listItems = numbers.map(value => <li>{value}</li>);

