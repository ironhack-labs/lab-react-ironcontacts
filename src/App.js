import React, { Component } from "react"
import logo from './logo.svg';
import contacts from "./contacts.json";
import './App.css';

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      contacts: contacts.filter((el, ind) => ind < 5)
    }
  }

  render() {
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
            {this.state.contacts.map((contact) => {
              return (
                <tr key={contact.id}>
                  <td>
                    <img src={contact.pictureUrl} />
                  </td>
                  <td>
                    {contact.name}
                  </td>
                  <td>
                    {contact.popularity.toFixed(2)}
                  </td>
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

