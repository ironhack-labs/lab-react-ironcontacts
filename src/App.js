import "./App.css";
import React, { Component } from "react";
import contacts from "./contacts.json";

class App extends Component {
  state = {
    contacts: contacts.slice(0, 5),
    allContacts: contacts,
  };

handleRandomContact = () => {

}

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={this.handleRandomContact}>Add a contact randomly</button>
        <table>
          <thead>
            <tr>
              <th className="AppTable">Name</th>
              <th className="AppTable">Picture</th>
              <th className="AppTable">Popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.toto}
              {this.state.contacts.map(contact => {
                return <tr key={contact.id}>
              <td className="AppTable">{contact.name}</td>
              <td className="AppTable"><img className="imgStar" src={contact.pictureUrl}/></td>
              <td className="AppTable">{contact.popularity}</td>
            </tr>
              })}
            
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
