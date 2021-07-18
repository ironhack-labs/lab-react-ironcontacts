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
          
      </tr>
    
  )
  }
    )
    return(
      <>
      <h1 className="h1-display">Contacts IRONHACK</h1>

      {/* button of the secon iteration adding contact */}
      <button onClick={this.addRandomContact} className="buton-add">Add Random Contact</button>

      <table className="tabla-display">
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
