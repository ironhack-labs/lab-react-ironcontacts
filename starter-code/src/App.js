import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json'
import List from './List.js'

class App extends Component {
  constructor(props) {
    super (props)
    this.state = {
      contacts: contacts.slice(0, 5) 
    }
  }

  addNew() {
    let newContacts = this.state.contacts.slice()
    newContacts.push(contacts[Math.floor(Math.random() * contacts.length)])

    this.setState({
      contacts: newContacts
    })
  }

  sortName(){
    let sortContacts = this.state.contacts.slice();
    sortContacts.sort((a,b) => a.name.localeCompare(b.name));

    this.setState({
        contacts: sortContacts
    })
  }

  sortPop(){
    let sortContacts = this.state.contacts.slice();
    sortContacts.sort((a, b) => a.popularity - b.popularity);

    this.setState({
        contacts: sortContacts
    })
  }

  deleteContact(deleteCelebrity){
    let deleteContacts = this.state.contacts;
    deleteContacts.splice(deleteCelebrity, 1);

    this.setState({
        contacts: deleteContacts
    })
  }

  render() {

    return (
      <div className="App">
      <header>
      <table>
          <thead className="App-header">
          <tr>
            <th className="column-title">Picture</th>
            <th className="column-title">Name</th>
            <th className="column-title">Popularity</th>
            <th className="column"><button className="button is-success" onClick={()=>this.addNew()}>
            Add a Random Celebrity
            </button></th>
            <th className="column"><button className="button is-primary" onClick={()=>this.sortName()}>
            Sort by Celebrity Name
            </button></th>
            <th className="column"><button className="button is-primary" onClick={()=>this.sortPop()}>
            Sort by Celebrity Popularity
            </button></th>
          </tr>
          </thead>

          <tbody />
          {this.state.contacts.map(contact => {
            return (
              <tr>
                <td className="column-rows">
                  {/* {" "} */}
                  <img className="celebPic" src={contact.pictureUrl} />
                  </td>
                  <td className="column-name">{contact.name}</td>
                  <td className="column-pop">{contact.popularity}</td>
                  <th className="column-delete"><button className="button is-danger" onClick={()=>this.deleteContact()} >
                  Delete Celebrity
                  </button></th>

              </tr>
            );
          })}
        </table>
        </header>
      </div>
    );
  }
}

export default App;
