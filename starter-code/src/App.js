import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
import Contact from './Components/Contact';

class App extends Component {
  render() {
    const fiveContacts = contacts.slice(0, 5);
    return (
      <div className="box">
        
        <table className="contacts-box"> 
        <h1>IronContacts</h1>
          <thead >
            <tr>
              <th className="hb">Picture</th>
              <th className="hb">Name</th>
              <th className="hb">Popularity</th>
            </tr>
          </thead>
          <tbody>
            {fiveContacts.map(eachContact =>(
             <Contact pictureUrl={eachContact.pictureUrl} name={eachContact.name} popularity={eachContact.popularity} />             
            ))}
          </tbody>
       </table>
      </div>
    );
  }
}

export default App;
