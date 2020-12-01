import React from 'react';
import './App.css';
import contacts from './contacts.json';

class App extends React.Component {
  state = {
    contacts: contacts.slice(0, 5),
    remainingContacts: contacts.slice(6)
  }

  handleRandomButton = () => {

    let randomContact = this.state.remainingContacts
    const newContact = randomContact[Math.floor(Math.random() * randomContact.length)]
  
    this.setState({contacts: [... this.state.contacts, newContact]})
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
        </tr>
        </thead>

        <tbody>
        {this.state.contacts.map((contact, contNum) => {
          return (
                  <tr>
                    <td>
                      <img className="pic-contacts" key={contNum} src={contact.pictureUrl} alt='Picture Contact'/>
                    </td>
                    <td key={contNum}>
                      {contact.name}
                    </td>
                    <td key={contNum}>
                      {contact.popularity}
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
