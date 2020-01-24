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
    const randomContact = contacts[Math.floor(Math.random() * contacts.length)];
    
    this.setState({
      contacts: [...this.state.contacts, randomContact]
    });
  };

  sortByNameHandler = () => {
    function compare(a, b) {
        // Use toUpperCase() to ignore character casing
        const contactA = a.name.toUpperCase();
        const contactB = b.name.toUpperCase();
      
        let comparison = 0;
        if (contactA > contactB) {
          comparison = 1;
        } else if (contactA < contactB) {
          comparison = -1;
        }
        return comparison;
      };

      console.log(this.state.contacts.sort(compare))
      
    this.setState({
      contacts: [...this.state.contacts.sort(compare)]
    })
  }

  sortByPopularity = () => {
    function compare(a, b) {
        // Use toUpperCase() to ignore character casing
        const contactA = a.popularity;
        const contactB = b.popularity;
      
        let comparison = 0;
        if (contactA > contactB) {
          comparison = -1;
        } else if (contactA < contactB) {
          comparison = 1;
        }
        return comparison;
      };

      //console.log(this.state.contacts.sort(compare))
      
    this.setState({
      contacts: [...this.state.contacts.sort(compare)]
    })
  }

  render() {
    console.log("random contact added ", this.addRandomContactHandler);

    return (
      <div>
        <button onClick={this.addRandomContactHandler}>Add Rondom Contact</button>
        <button onClick={this.sortByNameHandler}>Sort By Name</button>
        <button onClick={this.sortByPopularity}>Sort By Popularity</button>
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
