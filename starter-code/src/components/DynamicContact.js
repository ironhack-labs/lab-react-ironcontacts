import React, { Component } from "react";
import contacts from "../contacts.json";
import ShowContact from "./ShowContact";

export default class DynamicContact extends Component {
  constructor() {
    super();
    this.state = {
      contacts: contacts.slice(0, 5)
    };
  }

  addRandomContactHandler = () => {
    const randomContact = contacts[Math.floor(Math.random() * contacts.length)]; //fix contact for test
    
    this.setState({
      contacts: [...this.state.contacts, randomContact]
    });
    console.log(this.state.contacts);
  };

  render() {
    console.log("random contact added ", this.addRandomContactHandler);

    return (
      <div>
        <button onClick={this.addRandomContactHandler}>Add Rondom Contact</button>
        <div className="contacttable">
          <table>
            <thead>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
              </tr>
            </thead>
            <tbody>
              {this.state.contacts.map(oneContact => {
                return <ShowContact key={oneContact.id} {...oneContact} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
