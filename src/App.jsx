import React, { Component } from 'react';
import './App.css';

import contacts from './contacts.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      random: Math.floor(Math.random() * contacts.length)
    };
    this.addRandomContact = this.addRandomContact.bind(this);
  }

  addRandomContact() {
    // this.setState(( => {
    //   random:
    // }))
  }

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={addRandomContact}>Add Random Contact</button>
        <table>
          {contacts.slice(0, 5).map(singleContact => {
            return (
              <div>
                <tbody>
                  <tr>
                    <td>Picture</td>
                    <td>Name</td>
                    <td>Popularity</td>
                  </tr>
                  <tr>
                    <td>
                      <img src={singleContact.pictureUrl} alt={singleContact.pictureUrl} />
                    </td>
                    <td>{singleContact.name}</td>
                    <td>{singleContact.popularity}</td>
                  </tr>
                </tbody>
              </div>
            );
            // <div>{singleContact.name}</div>;
          })}
        </table>
      </div>
    );
  }
}

export default App;
