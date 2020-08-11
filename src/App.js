import React, { Component } from 'react'
import contacts from './contacts.json'
import ContactRow from './components/Contact/Contact'

class App extends Component {
  state = {
    contactsList5: [...contacts].slice(0, 5)
  }
  

  render() {
    return (
      <div>
        <h1>IronContact</h1>
          <table>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
            {this.state.contactsList5.map(contact => <ContactRow contact = {contact}/>)}
        </table>
      </div>
    )
  }
}


export default App
