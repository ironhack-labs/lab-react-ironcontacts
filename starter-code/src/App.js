import React, { Component } from 'react';
import './App.css';
import TableComp from './components/Table';
import contacts from './contacts.json'



class App extends Component {
  state = {
    contacts: contacts.slice(0,5)
  }

  newContact = () => { 
    contacts.splice(0, 5)

    let rndmContact = contacts[Math.floor(Math.random() * contacts.length)]
    let newList = this.state.contacts

    newList.push(rndmContact)

    this.setState({ contacts: newList })
  }

  sortName = () => {
    let newList = [...this.state.contacts]

    newList.sort((a, b)=> {
      return a.name > b.name ? 1 : -1
    })

    this.setState({contacts: newList})
  }

  sortPopular = () => {
    let newList = [...this.state.contacts]

    newList.sort((a, b) => {
      return a.popularity < b.popularity ? 1 : -1
    })

    this.setState({contacts: newList})
  }

  delete = (i) => {
    let newList = [...this.state.contacts]
    
    newList.splice(i, 1)

    this.setState({contacts: newList})
  }

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick= {this.newContact}>Add Contact</button>
        <button onClick= {this.sortName}>Sort by Name</button>
        <button onClick= {this.sortPopular}>Sort by Popularity</button>
        <TableComp list={this.state.contacts} delete={this.delete}/>
      </div>
    );
  }
}

export default App;
