import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from "./contacts.json";

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      contacts: contacts,

    }
  }
  render() {
    var result = this.state.contacts.slice(0, 5).map((contact)=>{
      return <tr>
                <td>
                  <img src={contact.pictureUrl} width="100px" />
                </td>
                <td>
                  <h1>{contact.name}</h1>
                </td>
                <td>
                  <h4>{contact.popularity}</h4>
                </td>
              </tr>
    })

    return (
      <div className="App">
          <h1>IronContacts</h1>
          <table>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
            
              {result}



          </table>
      </div>
    );
  }
}

export default App;
