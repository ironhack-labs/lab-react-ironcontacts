import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';

class App extends Component {
  state = {
    contacts: contacts.slice(0, 5),
  };

  // displayContacts = () => {
  //   const showContacts = this.state.contacts.map((contact) => {
  //     console.log('contact', contact);
  //     console.log('id', contact.id);

  //     return <tr key={contact.id}></tr>;
  //   });
  // };

  render() {
    console.log(this.state.contacts);
    return (
      <>
        <h1>IronContacts</h1>

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
                    <img src={contact.pictureUrl} width="80px"></img>
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
