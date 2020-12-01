import React from 'react';
import './App.css';
import contacts from './contacts.json';

class App extends React.Component {
  state = {
    contacts: contacts.slice(0, 5),
  }

  handleRandomButton = () => {
    const filteredContacts = contacts.filter(contact => !this.state.contacts.includes(contact))

    const randomNum = Math.floor(Math.random() * (filteredContacts.length - 1));
    
    const randomContact = filteredContacts[randomNum]

    this.setState({contacts: [...this.state.contacts, randomContact]})
  }

  handleNameButton = () => {
    const tableContacts = this.state.contacts 

    const sortedAlphabetically = tableContacts.sort((a, b) => a.name.localeCompare(b.name) )

    this.setState({contacts: sortedAlphabetically})
  }


  handlePopularityButton = () => {
    const tableContacts = this.state.contacts

    const sortedByPopularity = tableContacts.sort((a, b) => b.popularity - a.popularity)

    this.setState({contacts: sortedByPopularity})
  }

  handleDelete = (position) => {
    const newContacts = [...this.state.contacts]

    newContacts.splice(position, 1)

    this.setState({contacts: newContacts})
  }


  render () {
    return (
    <div className="App">
      <h1>IronContacts</h1>
      
      <button onClick={this.handleRandomButton}>Add Random Contact</button>
      <button onClick={this.handleNameButton}>Sort by name</button>
      <button onClick={this.handlePopularityButton}>Sort by popularity</button>
      <table>
        <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Action</th>
        </tr>
        </thead>

        <tbody>
        {this.state.contacts.map((contact, contNum) => {
          return (
                  <tr key={contNum}>
                    <td>
                      <img className="pic-contacts" src={contact.pictureUrl} alt='Face of the Contact'/>
                    </td>
                    <td>
                      {contact.name}
                    </td>
                    <td>
                      {contact.popularity}
                    </td>
                    <td>
                      <button onClick={() => this.handleDelete(contNum)}>Delete</button>
                    </td>
                  </tr>
                )
        })}
        </tbody>
      </table>
      
    </div>
  );
}
}

export default App;
