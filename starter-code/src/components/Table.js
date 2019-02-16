import React, { Component } from "react";
import contacts from "../contacts.json";
import "./Table.css";
import _ from "lodash";

let contactsArr = [];

class Table extends Component {
  constructor() {
    super(); //this runs React Component's constructor
    //initial state

    for (let i = 0; i < 5; i++) {
      contactsArr.push(contacts[i]);
    }

    this.state = {
      contacts: contactsArr
    };
  }

  addNew = () => {
    const addedNewArr = [...this.state.contacts];
    let randomIndex = Math.floor(Math.random() * contacts.length);
    addedNewArr.push(contacts[randomIndex]);
    this.setState({ contacts: addedNewArr });
  };

  orderByName = () => {
    let orderedByName = [...this.state.contacts];
    orderedByName = _.orderBy(orderedByName, ["name"], ["asc"]); // Use Lodash to sort array by 'name'
    this.setState({ contacts: orderedByName });
  };

  orderByPop = () => {
    let orderedByPop = [...this.state.contacts];
    orderedByPop = _.orderBy(orderedByPop, ["popularity"], ["asc"]); // Use Lodash to sort array by 'name'
    this.setState({ contacts: orderedByPop });
  };

  delete = index => {
    const deletedArr = [...this.state.contacts];
    deletedArr.splice(index, 1);

    this.setState({
      contacts: deletedArr
    });
  };

  render() {
    console.log(this.state);

    return (
      <div>
        <button onClick={this.addNew}>Add random contact</button>
        <button onClick={this.orderByName}>Sort by name</button>
        <button onClick={this.orderByPop}>Sort by popularity</button>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
              </tr>
            </thead>
            <tbody>
              {this.state.contacts.map((oneContact, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <img src={oneContact.pictureUrl} className="table-img" />
                    </td>
                    <td>{oneContact.name}</td>
                    <td>{oneContact.popularity}</td>
                    <td>
                      <button onClick={this.delete}>Delete</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Table;
