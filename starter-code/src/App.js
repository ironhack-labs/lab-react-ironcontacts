import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import contacts from './contacts.json'
import TableRow from './components/TableRow'

class App extends Component {
  constructor() {
    super()

    this.state = {
      contactsArr: contacts.splice(0, 5),
    }
  }
  render() {
    console.log(this.state.contactsArr)
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
          {this.state.contactsArr.map(contact => (
            <TableRow
              picture={contact.pictureUrl}
              name={contact.name}
              popularity={contact.popularity}
            />
          ))}
        </table>
      </div>
    )
  }
}

export default App
