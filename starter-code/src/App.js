import React, { Component } from 'react'
import contacts from './contacts.json'
import './App.css'
import TableRow from './components/tableRow/tableRow'

class App extends Component {
  constructor() {
    super()
    this.state = {
      contacts: [...contacts],
    }
  }

  render() {
    let shownContacts = this.state.contacts.slice(0, 5)

    return (
      <table>
        <tr>
          <th>
            <p>Image</p>
          </th>
          <th>
            <p>Name</p>
          </th>
          <th>
            <p>Popularity</p>
          </th>
        </tr>
        {shownContacts.map((elm, idx) => (
          <p key={idx}>
            <TableRow
              key={idx}
              name={elm.name}
              pictureUrl={elm.pictureUrl}
              popularity={elm.popularity}
            />
          </p>
        ))}
      </table>
    )
  }
}

export default App
