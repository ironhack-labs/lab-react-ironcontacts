import React, { Component } from 'react'
import contacts from './contacts.json'

export default class App extends Component {
  state = {
    contactList: contacts.slice(0, 5)
  }


  render() {
    return (
      <div>
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
                <tr>
                    <td>The table body</td>
                    <td>with two columns</td>
                </tr>
            </tbody>
        </table>
      </div>
    )
  }
}
