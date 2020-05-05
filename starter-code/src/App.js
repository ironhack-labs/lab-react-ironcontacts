import React, { Component } from 'react'
import contacts from './contacts.json'
import './App.css'
import TableRow from './components/tableRow/tableRow'

class App extends Component {
  constructor() {
    super()
    this.state = {
      contacts: [...contacts].slice(0, 5),
    }
  }

  addRandomContact() {
    alert('lol')
  }

  render() {
    return (
      <main>
        <button onClick={this.addRandomContact}>Add new random contact</button>
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
          {this.state.contacts.map((elm, idx) => (
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
      </main>
    )
  }
}

export default App
