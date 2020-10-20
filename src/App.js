import React from 'react';
import './App.css';

import contacts from './contacts.json'



class App extends React.Component {

  firstFiveContacts = contacts.slice(0,5)

  state = {
    contacts: this.firstFiveContacts
  }

  render(){
    return (
    <div className="App">
      <h1>IronContacts</h1>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th> 
            <th>Popularity</th>
          </tr>
        </thead>

        {this.state.contacts.map(contact => {
          return (
            <tbody>
              <tr key={contact.id}>
                <td > <img src={contact.pictureUrl} alt={contact.name}/> </td>
                <td >{contact.name}</td>
                <td >{contact.popularity}</td>
              </tr>
            </tbody>
          )
        })}
      </table>
    </div>

    )
  }
  }



export default App;
