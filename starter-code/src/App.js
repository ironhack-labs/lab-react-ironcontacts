import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';
import Card from './components/contacts/Card'

class App extends Component {
  constructor(){
    super();
    this.state = {
      myContacts: contacts.splice(0,5),
    }
  }

  addRandom = () => {
    let addedContact = this.state.myContacts;
    let random = contacts[Math.round(Math.random() * contacts.length)];
    if (addedContact.includes(random)){
      random = contacts[Math.round(Math.random() * contacts.length)]
    }
    addedContact.push(random);
    this.setState({ myContacts: addedContact })

  }

  sortByName = () => {
    let contactsList = this.state.myContacts;
    let sortedByName = contactsList.sort((a, b) => a.name.localeCompare(b.name));
    this.setState({ myContacts: sortedByName })

  }

  sortByPopularity = () => {
    let contactsList = this.state.myContacts;
    let sortedByPopularity = contactsList.sort((a, b) => b.popularity - a.popularity);
    this.setState({ myContacts: sortedByPopularity })
  }

  delete = (index) => {
    let contactsList = this.state.myContacts;
    contactsList.splice(index, 1);
    this.setState({ myContacts: contactsList })
  }

  render(){
    return (
      <div className='main-container'>
        <div>

        <button onClick={this.addRandom}>Add a random contact</button>
        <button onClick={this.sortByName}>Sort by Name</button>
        <button onClick={this.sortByPopularity}>Sort by Popularity</button>

        </div>
        <div>
        <h1>IronContacts</h1>

        </div>
        <div>

        <tbody>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>

          </tr>
          {this.state.myContacts.map((contact, index) => {
            let popularity = parseFloat((contact.popularity).toFixed(2));
            return(
              <tr>

                <Card 
                key={index}
                picture={contact.pictureUrl} 
                name={contact.name} 
                popularity={popularity}/>
                <td><button onClick={() => this.delete(index)}>Delete</button></td>
              </tr> 
            )
          })}
        </tbody>
        </div>
      </div>
    )
  }
}

export default App;
