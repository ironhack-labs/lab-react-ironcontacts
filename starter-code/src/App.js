import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';

class App extends Component {
  constructor(props) {
    super (props)
    this.AddContact = this.AddContact.bind(this);
  }
    state = {
      contacts: contacts.slice(0,5)
    }
    AddContact() {
    let max = contacts.length - 1
    let min = this.state.contacts.length
    let newContacts = [...this.state.contacts];
    console.log(newContacts)
    newContacts.push(contacts[(Math.floor(Math.random() * (max - min + 1)) + min)])
    this.setState({
      contacts: newContacts
      })
    }
    sortByName = ()=>{
      let sortedList = [...this.state.contacts].sort((a,b) => a.name.localeCompare(b.name))
      // console.log(sortedList)
      this.setState ({
        contacts:sortedList
      })
    }
    sortByPopularity = ()=>{
      let sortedPopularity = [...this.state.contacts].sort((a,b) => b.popularity - a.popularity)
      // console.log(sortedPopularity)
      this.setState ({
        contacts:sortedPopularity
      })
    }

    deleteContact(index) {
      let newContacts = [...this.state.contacts];
  
      newContacts.splice(index, 1)
      this.setState({
        contacts: newContacts
      });
    }

  render() {
    return (
      <div className="App">
        <header>
          <h1 className="App-title">IronContacts</h1>
        </header>
        <button className ="button-random-contact" onClick = {this.AddContact}>Add Random Contact</button>
        <button className ="button-sort-name" onClick = {this.sortByName}>Sort By Name</button>
        <button className ="button-sort-popularity" onClick = {this.sortByPopularity}>Sort By Popularity</button>
        
        <div className="Contact-Table">
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody className = "body-artists">
          {this.state.contacts.map((contact,index) => 
               ( 
                <tr key={index}>
                  <td><img className="Contact-Image" alt="" src={contact.pictureUrl}></img></td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity.toFixed(2)}</td>
                  <td><button className="delete-btn" onClick={this.deleteContact.bind(this, index)}>Delete</button></td>
                </tr>
              )
            )
          }
         
          </tbody>
        </table>

        </div>
      </div>
    );
  }
}

export default App;
