import React, { Component } from "react";
import contacts from "../contacts.json";
import Row from "./Row";

export class Contacts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      celebrities: contacts.slice(0, 5)
    };
  }

  findRandomContact = () => {
    return contacts[Math.floor(Math.random() * contacts.length)];
  };

  addRandomContact = () => {
    this.setState({
      celebrities: [...this.state.celebrities, this.findRandomContact()]
    });
  };

  sortByName = () => {
    this.setState({
      celebrities: this.state.celebrities.sort(function(a, b) {
        return a.name.localeCompare(b.name);
      })
    });
  };

  sortByPopularity = () => {
    console.log(this.state.celebrities);
    this.setState({
      celebrities: this.state.celebrities.sort(function(a, b) {
        return b.popularity - a.popularity;
      })
    });
  };

  render() {
    return (
      <div className="contacts">
        <h1>IronContacts</h1>
        <button onClick={this.addRandomContact}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort by Name</button>
        <button onClick={this.sortByPopularity}>Sort by Popularity</button>
        <table>
          <tbody>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
            {this.state.celebrities.map(x => (
              <Row
                key={x.pictureUrl}
                pictureUrl={x.pictureUrl}
                name={x.name}
                popularity={x.popularity.toFixed(2)}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Contacts;
