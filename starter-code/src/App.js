import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';

//IT.1
class App extends Component {
  constructor(){
    super()
    this.state = {
      firstContacts: contacts.slice(0,5)
    }
  }

  //IT.2
  addRandomContact = () => {
    let newContact = contacts[Math.floor(Math.random() * (contacts.length - 0 + 1)) + 0]
    while(this.state.firstContacts.includes(newContact.name)){
      newContact = contacts[Math.floor(Math.random() * (contacts.length - 0 + 1)) + 0]
    }
    this.setState({
      firstContacts: [...this.state.firstContacts, newContact]
    })
  }

  //IT.3
  sortByName = () => {
    this.setState({
      firstContacts: this.state.firstContacts.sort(function(a, b){
        var nameA=a.name, nameB=b.name
        if (nameA < nameB) return -1 
        if (nameA > nameB) return 1
        return 0
      })
    })
  }

  sortByPopularity = () => {
    this.setState({
      firstContacts: this.state.firstContacts.sort(function(a, b){
          return b.popularity-a.popularity
        })
    })
  }

  //IT.4
  deleteContact = (id) => {
    this.setState({
      firstContacts: this.state.firstContacts.filter(a => {
        return a.id !== id
      })
    })
  }
  render() {
    return (
      <div className="App">

        
{/* DISPLAY DATOS */}
         <h1>Iron Contacts</h1>
        <button onClick={this.addRandomContact}>Add random contact</button>
        <button onClick={this.sortByName}>Sort By Name</button>
        <button onClick={this.sortByPopularity}>Sort By Popularity</button>
        <table>
          <head>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </head>
          <body>
            {this.state.firstContacts.map((c, index) => {
              return(
              <tr key={index}>
                <td>Picture <img className='contact-image' src={c.pictureUrl} alt=""/></td>
                <td>Name{c.name}</td>
                <td>Popularity{c.popularity}</td>
                <td>Action<button onClick={() => this.deleteContact(c.id)}>Delete</button></td>
              </tr>);
            })}
          </body>
        </table>
      </div>
    );
  }
}
export default App;
