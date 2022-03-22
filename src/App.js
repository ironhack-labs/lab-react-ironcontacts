import React, {Component} from 'react';
import contacts from './contacts';
import './App.css';

class App extends Component {
  state = {
    contacts: contacts.filter((el, index) => index < 5)
  }
  
  addRandomContact() {
    const newContact = contacts[Math.floor(Math.random() * (contacts.length - 5 + 1) + 5)];

    this.setState(prevState => {
      if (!prevState.contacts.includes(newContact)){
        return {
          contacts: prevState.contacts.concat(newContact)
        }
      }
    })
  }


  render(){
    console.log(this.state.contacts);
    return (
      <div className="App">
        <h2>IronContacts</h2>
        <button
          className="add-contact"
          onClick={() => this.addRandomContact()}
        >
          Add Random Contact
        </button>
        <div className="actors-table container">
          <table>
            <thead>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>Won Oscar</th>
                <th>Won Emmy</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.contacts.map(contact => {
                  return (
                    <tr key={contact.id}>
                      <th><img src={contact.pictureUrl} alt="" /></th>
                      <th>{contact.name}</th>
                      <th>{contact.popularity.toFixed(2)}</th>
                      <th>{contact.wonOscar && '🏆'}</th>
                      <th>{contact.wonEmmy && '🏆'}</th>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
