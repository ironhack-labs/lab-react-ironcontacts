import React, {Component} from 'react';
import contacts from './contacts';
import './App.css';

class App extends Component {
  state = {
    contacts: contacts.filter((el, index) => index < 5)
  }


  render(){
    console.log(this.state.contacts);
    return (
      <div className="App">
        <h2>IronContacts</h2>
        <div className="actors-table container">
          <table>
            <thead>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
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
