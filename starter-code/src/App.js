import React, { Component } from "react";
import Contacts from "./contacts.json";
import FirstFive from "./Comps/FirstFive";

export default class App extends Component {
  state = { contacts: Contacts };
  showFirstFive = () => {
    return this.state.contacts.map((eachOne, i) => {
      if (i < 5) {
        return <FirstFive key={i} thePerson={eachOne} />;
      }
    });
  };
  render() {
    return (
      <div>
        <h1>IronContacts</h1>
        <button className="btn btn-info">Add Random Contact</button>
        <br />
        <br />
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
            {this.showFirstFive()}
          </thead>
        </table>
      </div>
    );
  }
}
