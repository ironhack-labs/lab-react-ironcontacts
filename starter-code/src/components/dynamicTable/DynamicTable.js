import React, { Component } from "react";
import Contacts from "./Contacts";
import contacts from "../../contacts.json";

class DynamicTable extends Component {
  constructor() {
    super(); //since we are extending class Table so we have to use super in order to override Component class constructor
    this.state = {
      //state is by default an object
      arrContacts: contacts.splice(0, 5)
    };
  }

  addContactHandler = () => {
    const contactsCopy = [...this.state.arrContacts];
    let check = true;
    while (check) {
      let random = contacts[Math.floor(Math.random() * contacts.length)];
      if (this.state.arrContacts.indexOf(random) === -1) {
        contactsCopy.push(random);
        this.setState({
          arrContacts: contactsCopy
        });
        check = false;
      }
    }
  };
  sortNameHandler = () => {
    const contactsCopy = this.state.arrContacts.sort((a, b) => {
      return a["name"].localeCompare(b["name"]);
    });
    this.setState({
      arrContacts: contactsCopy
    });
  };

  sortPopHandler = () => {
    const contactsCopy = this.state.arrContacts.sort(
      (b, a) => a.popularity - b.popularity
    );
    this.setState({
      arrContacts: contactsCopy
    });
  };

  clickToDelete = index => {
    const contactsCopy = [...this.state.arrContacts];
    contactsCopy.splice(index, 1);
    this.setState({
      arrContacts: contactsCopy
    });
  };

  render() {
    //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
    return (
      <div>
        <button onClick={this.addContactHandler}>Add Random Contact</button>
        <button onClick={this.sortNameHandler}>Sort by name</button>
        <button onClick={this.sortPopHandler}>Sort by popularity</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {this.state.arrContacts.map((e, i) => (
                <Contacts clickToDelete={() => this.clickToDelete(i)} key={i}>
                  {e}
                </Contacts>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default DynamicTable;
