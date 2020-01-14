import React, { Component } from "react";
import contacts from "../contacts.json";
import Row from "./Row";

export class Contacts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      celebrities: [this.findRandomContact()]
    };
  }

  findRandomContact = () => {
    return contacts[Math.floor(Math.random() * contacts.length)];
  };

  addRandomContact = () => {
    console.log(this.state.celebrities);
    this.setState({
      celebrities: this.state.celebrities.push(this.findRandomContact())
    });
    console.log(this.state.celebrities);
  };

  render() {
    return (
      <div className="contacts">
        <h1>IronContacts</h1>
        <button onClick={this.addRandomContact}>Add Random Contact</button>
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
                popularity={x.popularity}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Contacts;
