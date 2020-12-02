import React from 'react';
import './App.css';

import contacts from './contacts.json';

class App extends React.Component {

  state = {
    contactList: contacts.slice(0,5),
  }

  handleAddContact= () => {

    this.setState({
      contactList: this.state.contactList.concat(contacts[Math.floor(Math.random() * contacts.length)])
    });
  };

  handleByPopularity= () => {

    this.setState({
      contactList: this.state.contactList.sort(contacts[Math.floor(Math.random() * contacts.length)])
    });
  };


  render() {

    return (
      <div className="App">
      <h1>IronContacts</h1>
      <button onClick={this.handleAddContact}>Add Random Contact</button>
      <button onClick={this.handleByPopularity}>Sort by popularity</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>

        <tbody>
            { this.state.contactList.map (contact => {
            return (
              <tr key={contact.id}>
            <td><img src={contact.pictureUrl} style={{ width: '100px' }} alt=''/></td>
            <td>{contact.name}</td>
            <td>{contact.popularity}</td>
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
