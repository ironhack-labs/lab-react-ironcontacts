import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { ContactList,AddRandomContact } from "./components/ListDemo.js";
import contacts from "./contacts.json";
//

class App extends Component {
  //state = firstContacs;
  render() {
    //console.log(firstContacs);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <h1>Iron Contacts</h1>

        <table className="table-format">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>

          <ContactList datasrc={contacts} />
          <AddRandomContact datasrc={contacts}/>
        </table>
        </div>

      </div>
    );
  }
}

export default App;
