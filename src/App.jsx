import React, { Component } from 'react'
import contacts from './contacts.json'

export default class App extends Component {
  state = {
    contactList: contacts.slice(0, 5)
  }

  handleRandom = () => {
    const newRandom = contacts[Math.floor(Math.random() * (contacts.length - 5)) + 5];
    this.setState(prevState => {
     return  {
        contactList: [...prevState.contactList, newRandom]
      }
    })
  }

  render() {
    return (
      <div>
        <div className="Buttons">
          <button onClick={this.handleRandom}>Random</button>
        </div>
        <table>
            <thead>
                <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>
                </tr>
            </thead>
            <tbody>
              {
                this.state.contactList.map(contact => {
                  return(
                    <tr key={contact.id}>
                      <td><img src={contact.pictureUrl} width="128px" alt={`pic of ${contact.name}`}/></td>
                      <td>{contact.name}</td>
                      <td>{contact.popularity.toFixed(2)}</td>
                    </tr>
                  )
                })
              }
            </tbody>
        </table>
      </div>
    )
  }
}
