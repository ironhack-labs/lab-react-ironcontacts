
import { Component } from 'react';

import './App.css';
import contacts from './contacts.json';

class App extends Component {
  state = {
    contacts: contacts.slice( 0, 4 )
  }

  render (){
    const listContacts = this.state.contacts.map( (contact) => {
      const { id, pictureUrl, name, popularity } = contact;
      return (
        <tr key={id} >
          <td><img className="picture" src={pictureUrl} alt={name} /></td>
          <td>{name}</td>
          <td>{Math.round(popularity*10)/10}</td>
        </tr>
      )
    });
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            { listContacts }
          </tbody>
        </table>
      </div>
    );
  }
  
}

export default App;
