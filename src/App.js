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

    for( let i = 0; i <= 4; i ++){
      newArr.push( contacts[i])
    }

    this.setState({
      contacts: newArr
    })
  }

  componentDidMount(){
    this.fiveContacts()
  }


  render(){
    return (
      <div className="App">
        <h1>Ironcontacts</h1>
        <table>
          <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
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