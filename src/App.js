import React, { Component } from "react"
import logo from './logo.svg';
import contacts from "./contacts.json";
import './App.css';

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      contacts: contacts.filter((el, ind) => ind < 5)
    }
  }

  onAddRandom = () => {
    let randomNum = Math.round(Math.random()* (contacts.length - 5)) + 5

    let isUnique = true;

    for (let i = 0; i < this.state.contacts.length; i++) {
      if(contacts[randomNum].id === this.state.contacts[i].id) {
        isUnique = false
      }
    }

    if (isUnique) {
      this.setState({contacts: [...this.state.contacts, contacts[randomNum]]})
    } else {
      this.onAddRandom()
    }

  }

  onSort = (e) => {
    const value = e.target.value
    const contactsCopy = [...this.state.contacts]
    value === "name" ? 
      contactsCopy.sort((a, b) => {
        return a.name.localeCompare(b.name)
      }) :
      contactsCopy.sort((a, b) => {
        return a.popularity - b.popularity
      })
    this.setState({contacts: contactsCopy})
  }

  onDelete = (e) => {
    const value = e.target.value
    const contactsCopy = [...this.state.contacts]
    const filteredArr = contactsCopy.filter((el) => {
      return el.id !== value
    })
    this.setState({contacts: filteredArr})
  }


  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={this.onAddRandom}> Add Random Contact </button>
        <button onClick={this.onSort} value="name"> Sort By Name </button>
        <button onClick={this.onSort} value="popularity"> Sort by popularity </button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map((contact) => {
              return (
                <tr key={contact.id}>
                  <td>
                    <img src={contact.pictureUrl} />
                  </td>
                  <td>
                    {contact.name}
                  </td>
                  <td>
                    {contact.popularity.toFixed(2)}
                  </td>
                  <td>
                    <button value={contact.id} onClick={this.onDelete}>Delete</button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;

