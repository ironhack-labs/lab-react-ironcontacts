import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';

class App extends Component {
  state = {
    contacts: contacts.slice(0, 5),
  };

  addRandomContact = () => {
    //var item = items[Math.floor(Math.random() * items.length)];
    let random = contacts[Math.floor(Math.random() * contacts.length)];
    console.log('random', random);

    if (!contacts.includes(random)) {
      contacts.push(random);
    }

    this.setState((state, props) => ({
      contacts: state.contacts.concat(random),
    }));
  };

  render() {
    console.log(this.state.contacts);
    return (
      <>
        <h1>IronContacts</h1>
        <button onClick={() => this.addRandomContact()}>Add contact</button>

        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
              </tr>
            </thead>
            <tbody>
              {this.state.contacts.map((contact) => (
                <tr key={contact.id}>
                  <td>
                    <img
                      src={contact.pictureUrl}
                      width="80px"
                      alt={contact.name}
                    ></img>
                  </td>
                  <td>
                    <p>{contact.name}</p>
                  </td>
                  <td>
                    <p>{contact.popularity.toFixed(2)}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default App;
