import React, { Component } from "react";
import "./App.css";

import contacts from "./contacts.json";

class App extends Component {
  state = {
    contacts: []
  };

  pushContacts = num => {
    for (let i = 0; i < num; i++) {
      this.state.contacts.push(contacts[i]);
    }
  };

  componentWillMount() {
    this.pushContacts(5);
  }

  render() {
    return (
      <React.Fragment>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>

          <tbody>
            {console.log(this.state.contacts)}
            {this.state.contacts.map((elem, i) => (
                <tr key={i}>
                  <td><img src={elem.pictureUrl} alt={elem.name}/></td>
                  <td>{elem.name}</td>
                  <td>{elem.popularity}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default App;
