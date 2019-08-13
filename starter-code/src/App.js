import React, { Component } from 'react'
import './App.css'

import contacts from './contacts.json'
import Card from './components/Card'


class App extends Component {
  constructor(){
    super()

    this.state =  {Allcontacts: contacts.splice(0, 5)}        
    
}

  addRandomContact = ()=> {

    const newContact= contacts[Math.floor(Math.random()*contacts.length)]
    const copyContacts = [...this.state.Allcontacts]
    copyContacts.push(newContact)

    this.setState({
      Allcontacts : copyContacts
    })
  }

  sortByName = ()=> {

    
    const copyContacts = [...this.state.Allcontacts]
    copyContacts.sort((a, b) => (a.name > b.name) ? 1 : -1)

    this.setState({
      Allcontacts : copyContacts
    })
  }

  sortByPopularity = ()=> {

    
    const copyContacts = [...this.state.Allcontacts]
    copyContacts.sort((a, b) => (a.popularity < b.popularity) ? 1 : -1)

    this.setState({
      Allcontacts : copyContacts
    })
  }

  deleteContact = idx => {

    const copyContacts = [...this.state.Allcontacts]
    copyContacts.splice(idx, 1)

    this.setState({
        Allcontacts: copyContacts
    })
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">IronContacts</h1>
        </header>
        <div >
        <button onClick={this.addRandomContact}>
                    Add Random Contact
        </button>
        <button onClick={this.sortByName}>
                    Sort by Name
        </button>
        <button onClick={this.sortByPopularity}>
                    Sort by Popularity
         </button>
        <table className="table">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
          
          {this.state.Allcontacts.map((elm, idx) => {
            return <Card key={idx} name={elm.name} pictureUrl={elm.pictureUrl} popularity={elm.popularity} deleteContact={() => this.deleteContact(idx)} /> 
          })}
        
          </tbody> 
        </table>
        </div>
      </div>
    );
  }
}

export default App;
