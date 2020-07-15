import React, {Component} from 'react';
import contacts from './contacts.json'
import './App.css';
import Table from './components/Table'

class App extends Component {

  state = {
    people: contacts.slice(0,5)
  }

  addRandomContact = () => {
    const newContact = contacts[Math.floor(Math.random()*contacts.length)];
    this.setState((state, props) => ({
      people: state.people.concat(newContact)
    }))
  }

  sortByName = () => {
    this.setState((state, props) => ({
      people: state.people.sort((a, b) => (a.name.localeCompare(b.name)))
    })) 
  }

  deleteContact = (contactIndex) => {
    const pplCopy = [...this.state.people];
    pplCopy.splice(contactIndex, 1);
    this.setState({
        people: pplCopy
    })
    }

  sortByPopularity = () => {
    this.setState((state, props) => ({
      people: state.people.sort((a, b) => b.popularity-a.popularity)
    }))
  }
  render() {
    return (
      <div className="App">
        <h1>Contact List</h1>
        <button onClick={this.addRandomContact}>Add a random Contact</button>
        <button onClick={this.sortByName}>Sort by Name</button>
        <button onClick={this.sortByPopularity}>Sort by Popularity</button>
        {this.state.people.length === 0 && <h2>No Contacts to display</h2>}
        <div  className="table">
          <table>
            <thead>
              <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
              </tr>
            </thead>
      {this.state.people.map((contact, index) => {
            return <Table contact={contact} deleteContact={() => this.deleteContact(index)} />
            })}
      </table>
      </div>
      </div>
    )
  }
}

export default App;