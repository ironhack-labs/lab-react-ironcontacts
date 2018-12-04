import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json'
import Contacts from './components/Contacts/Contacts'

let list = [];
for (var i = 0; i < 5; i++) {
  list.push(contacts[i])
}
let minilist = list.map(celebrity => {
  return (
    <Contacts
      img={celebrity.pictureUrl}
      name={celebrity.name}
      popularity={celebrity.popularity} />
  )
})

class App extends Component {

    constructor() {
      super();
      this.state = { contacts: minilist }
      // addRandomContact = () => {
      //   //const updatedContacts=

      // }
    }
    render() {
      return (
        <div className="App">
          <h1>IronContacts</h1>
          <button>Add Random Contact</button>
          <table>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>

            {minilist}

          </table>
        </div>
      );
    }
  }

export default App;
