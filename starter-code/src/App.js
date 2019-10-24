import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";
import ContactCard from "./components/ContactCard";

class App extends Component {
  render() {
    contacts.slice(0, 5);
    console.log("contacts", contacts);
    // name: "Idris Elba"
    // pictureUrl: "https://image.tmdb.org/t/p/w500/d9NkfCwczP0TjgrjpF94jF67SK8.jpg"
    // popularity: 11.622713
    return (
      <div className="App">
        <h1> Contacts</h1>
        <table>
          <thead>
            <tr>
              <td>Picture</td>
            </tr>
          </thead>
          <tbody>
            {contacts.slice(0, 5).map((e, index) => {
              return <ContactCard key={index} name={e.name} />;
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;