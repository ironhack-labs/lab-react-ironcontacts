import React, { Component } from "react";
import contact from "./contacts.json";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><img src={contact[0].pictureUrl} alt='{contact.name}'/></td>
              <td>{contact[0].name}</td>
              <td>{Math.round(contact[0].popularity*100)/100}</td>
            </tr>
            <tr>
              <td><img src={contact[1].pictureUrl} alt='{contact.name}'/></td>
              <td>{contact[1].name}</td>
              <td>{Math.round(contact[1].popularity*100)/100}</td>
            </tr>
            <tr>
              <td><img src={contact[2].pictureUrl} alt='{contact.name}'/></td>
              <td>{contact[2].name}</td>
              <td>{Math.round(contact[2].popularity*100)/100}</td>
            </tr>
            <tr>
              <td><img src={contact[3].pictureUrl} alt='{contact.name}'/></td>
              <td>{contact[3].name}</td>
              <td>{Math.round(contact[3].popularity*100)/100}</td>
            </tr>
            <tr>
              <td><img src={contact[4].pictureUrl} alt='{contact.name}'/></td>
              <td>{contact[4].name}</td>
              <td>{Math.round(contact[4].popularity*100)/100}</td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
}

export default App;
