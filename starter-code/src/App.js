import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json'
import Contacts from './components/Contacts/Contacts'

let list = [];
for (var i = 0; i < 5; i++) {
  list.push(contacts[i])
}
let minilist = list.map(celebrity => {
  console.log(celebrity)
  return (
    <Contacts {...celebrity}/>
  )
})

class App extends Component {

    constructor() {
      super();
      this.state = { contacts: minilist }
    }

    addRandomContact = () => {
      let arr = [...this.state.contacts]
      let idxRd = parseInt(Math.random() * contacts.length);
      arr.push(<Contacts {...contacts[idxRd]}/>)
      this.setState({
        ...this.state, contacts: arr
      })
    }

    render() {
      return (
        <div className="App">
          <h1>IronContacts</h1>
          <button onClick={this.addRandomContact}>Add Random Contact</button>
          <table>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>

            {this.state.contacts}

          </table>
        </div>
      );
    }
  }

export default App;
