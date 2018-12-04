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

  addRandomContact = () =>{
    const updatedContacts = this.state.contacts;
    updatedContacts.push(contacts[parseInt(Math.random() * contacts.length)])
    this.setState({
      ...this.state, contacts: updatedContacts
    })
   
    console.log(this.state.contacts)
  }


  componentWillMount() {
    this.pushContacts(5);
  }

  render() {
    return (
      <React.Fragment>
        <h1>IronContacts</h1>
        <button onClick={this.addRandomContact}>Add Random Contact</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>

          <tbody>
            {this.state.contacts.map((elem, i) => (
                <tr key={i}>
                  <td><img style={{width: 100}} src={elem.pictureUrl} alt={elem.name}/></td>
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
