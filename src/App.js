import React from 'react';
import './App.css';
import contacts from './contacts.json';
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
  state = {
    contacts: contacts.slice(0,5)
  }

  AddContact() {
    const getRandomeContact = contacts[Math.floor(Math.random()* contacts.length)]
    this.setState({
      contacts: [...this.state.contacts, getRandomeContact]
    })
  }

  SortByName() {
    const SortName = this.state.contacts.sort(function(a, b){
      if (a.name < b.name) 
       return -1;
      if (a.name > b.name)
       return 1;
      return 0; 
     });
     this.setState({
       contacts: [...this.state.contacts, SortName]
     })
  }

  SortByPopularity() {
    const SortPopularity = this.state.contacts.sort((a,b)=> {
      if (a.popularity > b.popularity) 
       return -1;
      if (a.popularity < b.popularity)
       return 1;
      return 0;
    } )
     this.setState({
       contacts: [...this.state.contacts, SortPopularity]
     })
  }

  RemoveContact(contact) {
    this.setState({
      contacts: this.state.contacts.filter(c => c !== contact)
    });
  }

  render () {
    return(
      <div className="App">
          <h1>Ironhack Contacts</h1>
          <button onClick={() => this.AddContact()}>Add Random Contact</button>
          <button onClick={() => this.SortByName()}>Sort by Name</button>
          <button onClick={() => this.SortByPopularity()}>Sort by Popularity</button>
          <table className="table table-hover">
          <thead className="thead">
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.contacts.map(contact => {
                    return (
                      <tr>
                        <td><img src={contact.pictureUrl} style={{width: '100px'}}/></td>
                        <td>{contact.name}</td>
                        <td>{contact.popularity}</td>
                        <td><button onClick={() => this.RemoveContact(contact)}>Delete</button></td>
                      </tr>
                    )
                  })}
            </tbody>
          </table>
        </div>
    )
  }
}  

export default App;
