import React, { Component } from "react";
import Contacts from "./contacts.json";
import FirstFive from "./Comps/FirstFive";
import RandomCon from "./Comps/RandomCon";

export default class App extends Component {
  state = {
    vcontacts: Contacts.slice(0, 5),
    icontacts: Contacts.slice(5)
  };

  addRandom = () => {
    let icon = [...this.state.icontacts];
    let rand = icon.splice(Math.floor(Math.random() * icon.length), 1)[0];
    let clone = [...this.state.vcontacts];
    if (rand) clone.unshift(rand);
    this.setState({ vcontacts: clone, icontacts: icon });
  };
  showFirstFive = () => {
    return this.state.vcontacts.map((eachOne, i) => {
      return <FirstFive key={i} thePerson={eachOne} />;
    });
  };
  render() {
    return (
      <div>
        <h1>IronContacts</h1>
        <button className="btn btn-info" onClick={this.addRandom}>
          Add Random Contact
        </button>
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
