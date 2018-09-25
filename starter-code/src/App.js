import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from "./contacts.json";

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      contacts: contacts,
      selected: contacts.slice(0, 5)

      //
    }


  }
  addContact = ()=> {
    var random= this.state.contacts[Math.floor(Math.random() * contacts.length + 5)]
    console.log(this.state.selected)
    var newContacts = this.state.selected
    newContacts.push(random)
    this.setState({
      selected: newContacts
    })
  }


  sortName = () =>{
    let contactsOrg = this.state.selected
    contactsOrg.sort((a, b)=>{
      return b.popularity - a.popularity
    })
    this.setState({
      selected: contactsOrg
    })
  }

  render() {

    const result = this.state.selected.map((contact)=>{
      return <tr>
                <td>
                  <img src={contact.pictureUrl} width="100px" />
                </td>
                <td>
                  <h1>{contact.name}</h1>
                </td>
                <td>
                  <h4>{contact.popularity.toFixed(2)}</h4>
                </td>
              </tr>
    })

    return (
      <div className="App">
          <h1>IronContacts</h1>
          <button onClick={this.addContact}>Add Random Contact</button>
          <button onClick={this.sortName}>Sort By Name</button>

          <table>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>

              {result}



          </table>
      </div>
    );
  }
}

export default App;
