// src/App.js
import "./App.css";
import contacts from "./contacts.json"
import React, { Component } from 'react'

class App extends Component {
  state = {
    contacts:[]
  }

  fiveContacts(){
    let newArr = []

    for( let i = 0; i <= 5; i ++){
      newArr.push( contacts[i])
    }

    this.setState({
      contacts: newArr
    })
  }

  randomContact() {
    const filteredContacts = []

    contacts.forEach( contact => {
      if(!this.state.contacts.includes(contact)){
        filteredContacts.push(contact)
      }
    })
     this.setState({
      contacts: [...this.state.contacts, filteredContacts[Math.floor(Math.random() * this.state.contacts.length)] ]
    }) 

  }

  componentDidMount(){
    this.fiveContacts()
  }


  render(){
    return (
      <div className="App">
        <h1>Ironcontacts</h1>
        <button onClick={() => this.randomContact()}>Add a Random Contact</button>
        <table>
          <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
          </tr>
          </thead>

          <tbody>
            {this.state.contacts.map((contact, index) => {
              return(
              <tr key={contact.id}>
                  <td>
                  <div className="picture-row">
                    <img className="celbPicture" src={contact.pictureUrl} alt="famous person" />
                  </div>
                  </td>
                  <td>{contact.name}</td>
                  <td>{(contact.popularity).toFixed(2)}</td>
                  <td>
                    {contact.wonOscar ? '🏆' : ''}
                  </td>
                  <td>
                    {contact.wonEmmy ? '✔️' : ''}
                  </td>
              </tr>
              )
            })}
          </tbody>
        </table>

      </div>
    )
  }
}
export default App;