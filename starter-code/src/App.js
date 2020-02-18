import React, { Component } from 'react';
import './App.css';
import contacts2 from './contacts.json'


class App extends Component {
  state={
    contacts: contacts2.slice(0,5)
  }
  addContact = ()=>{
    const random = Math.floor(Math.random()*(contacts2.length))
    const contactNew = contacts2[random]
    this.setState({contacts: [...this.state.contacts,contactNew]})
  }
  sortName=()=>{
    const contactNew = [...this.state.contacts].sort((a, b)=> {
      return a.name.localeCompare(b.name)  })
    this.setState({contacts: [...contactNew]})
  }
  sortPopularity=()=>{
    const contactNew = [...this.state.contacts].sort((a, b)=> {
      return b.popularity - a.popularity;})
    this.setState({contacts: [...contactNew]})
  }
  deleteContact = (index) => {
    const contactDel = [...this.state.contacts]
    contactDel.splice(index, 1)
    this.setState({contacts:contactDel})
  }
  render() {
    return (
      <div className="App">
      <button onClick={this.addContact}>
          Add Random Contact
        </button>
        <button onClick={this.sortName}>
          Sort by Name
        </button>
        <button onClick={this.sortPopularity}>
          Sort by popularity
        </button>
        {<table>
          <thead>
          <tr>
            <th>picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>action</th>
          </tr>
          </thead>
          <tbody>
          {this.state.contacts.map((contact, i) => (
            <tr key={i}>
                <td><img src={contact.pictureUrl} alt={contact.name}></img></td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td><button onClick={()=>this.deleteContact(i)}>
                    Delete
                </button>
                </td>
            </tr>
          ))}
          </tbody>
        </table>
        }
      </div>
    );
  }
}

export default App;
