import React, { Component } from "react";
import contacts from "../contacts.json";
import "./Table.css";
import _ from "lodash";
import ActionButton from "./ActionButton";
import "bootstrap/dist/css/bootstrap.css";

let contactsArr = [];

class Table extends Component {
  constructor() {
    super(); //this runs React Component's constructor
    //initial state

    //round to two decimals
    const twoDecimalsArr = [...contacts];
    twoDecimalsArr.forEach(
      contact =>
        (contact.popularity = Math.round(contact.popularity * 100) / 100)
    );

    //get first five
    for (let i = 0; i < 5; i++) {
      contactsArr.push(twoDecimalsArr[i]);
    }

    this.state = {
      contacts: contactsArr
    };
  }

  addNew() {
    console.log("adding");
    const addedNewArr = [...this.state.contacts];
    let randomIndex = Math.floor(Math.random() * contacts.length);
    addedNewArr.push(contacts[randomIndex]);
    this.setState({ contacts: addedNewArr });
  }

  orderByName() {
    let orderedByName = [...this.state.contacts];
    orderedByName = _.orderBy(orderedByName, ["name"], ["asc"]); // Use Lodash to sort array by 'name'
    this.setState({ contacts: orderedByName });
  }

  orderByPop() {
    let orderedByPop = [...this.state.contacts];
    orderedByPop = _.orderBy(orderedByPop, ["popularity"], ["asc"]); // Use Lodash to sort array by 'name'
    this.setState({ contacts: orderedByPop });
  }

  delete(index) {
    console.log("calling delete function");
    const deletedArr = [...this.state.contacts];
    deletedArr.splice(index, 1);

    this.setState({
      contacts: deletedArr
    });
  }

  render() {
    console.log(this.state);

    return (
      <div className="table-container">
        <div className="buttonRow w-100">
          <ActionButton
            onClickFunction={() => this.addNew()}
            className="btn btn-link"
          >
            Add random contact
          </ActionButton>
          <ActionButton
            onClickFunction={() => this.orderByName()}
            className="btn btn-link mx-3"
          >
            Sort by name
          </ActionButton>
          <ActionButton
            onClickFunction={() => this.orderByPop()}
            className="btn btn-link"
          >
            Sort by popularity
          </ActionButton>
        </div>
        <table className="mt-4 table table-hover table-info">
          <thead>
            <tr>
              <th>Picture</th>
              <th class="text-left">Name</th>
              <th class="text-left">Popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map((oneContact, index) => {
              return (
                <tr key={index}>
                  <td>
                    <img src={oneContact.pictureUrl} className="table-img" />
                  </td>
                  <td class="text-left align-middle">{oneContact.name}</td>
                  <td class="text-left align-middle">
                    {oneContact.popularity}
                  </td>
                  <td class="text-left align-middle">
                    <ActionButton
                      onClickFunction={() => this.delete(index)}
                      className="btn btn-danger"
                    >
                      Delete
                    </ActionButton>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
