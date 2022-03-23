// src/App.js
import "./App.css";
import contacts from "./contacts.json"
import React, { Component } from 'react'

class App extends Component {
  state = {
    contacts:[],
    sort: ''
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
 
    handleSortBy = (event) => {
    const { name } = event.target

    this.setState(prevState => {
      return {
        sort: prevState.sort === name ? '' : name
      }
    })
  }

  sortContacts() {
    const { contacts, sort } = this.state

    if(!sort){
      return contacts
    }

    if (sort === 'name') {
      return contacts.sort((a, b) =>  a.name.localeCompare(b.name))
    }

    if (sort === 'popularity') {
      return contacts.sort((a, b) => (a.popularity > b.popularity) ? -1 : 1)
    }
  } 

  deleteItem(id){
    const { contacts } = this.state

    this.setState({
      contacts: contacts.filter((contact) => contact.id !== id)
    })

  }

  componentDidMount(){
    this.fiveContacts()
  }

  render(){
    const contacts = this.sortContacts()
    return (
      <div className="App">
        <h1>Ironcontacts</h1>
        <div>
          <button onClick={() => this.randomContact()}> Add a Random Contact </button>
          <button name="popularity" onClick={this.handleSortBy}> Sort by popularity </button>
          <button name="name" onClick={this.handleSortBy}> Sort by name </button>
        </div>
        <table>
          <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>Action</th>
          </tr>
          </thead>

          <tbody>
            {contacts.map((contact, index) => {
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
                  <td>
                    <button onClick={() => this.deleteItem(contact.id)}> Delete </button>
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