import React from 'react';
import './App.css';
import contacts from "./contacts.json";

class App extends React.Component {
  state = {
    contacts: contacts.splice(0, 5),
  }


  addRandomContact = () => {
    let randomIndex = Math.floor(Math.random() * contacts.length - 0) + 0
    let randomContact = contacts[randomIndex]
    this.setState((previousState) => {
      return {
        contacts: previousState.contacts.concat(randomContact),
      }
    })
  }


  sortByName = () => {
    const {contacts} = this.state;
    this.setState((previousState) => {
      return {
        contacts: previousState.contacts.sort((a, b) => {
          if (a.name < b.name) {
             return -1; 
            } else if (a.name > b.name) { 
              return 1; 
            } else {
            return 0;
          } 
        }),
      }
    })
  }


  sortByPopularity = () => {
    const { contacts } = this.state;
    this.setState((previousState) => {
      return {
        contacts: previousState.contacts.sort((a, b) => {
            return b.popularity - a.popularity;
        }),
      }
    })

  }



handleDelete = (id) => {
  this.setState((previousState) => {
    return {
      contacts: previousState.contacts.filter((contact) => {
        return contact.id !== id
      }),
    };
  });
}


  






  render() {
    const {contacts} = this.state;
    return <div className="App">
      <h1>IronContacts</h1>
      <button onClick={this.addRandomContact}>
        Add Random Contact
      </button>
      <button onClick={this.sortByName}>Sort by name</button>
      <button onClick={this.sortByPopularity}>Sort by popularity</button>
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
          
        
          {contacts.map((contact) => {
            return (
              
              <tr key={contact.id}>
                <td><img src={contact.pictureUrl} alt="actor-picture" /></td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                <button onClick={() => this.handleDelete(contact.id)}>Delete</button>
              </tr>
            )
          })}
        </tbody>


      </table>
    </div>
  }
}

export default App;
