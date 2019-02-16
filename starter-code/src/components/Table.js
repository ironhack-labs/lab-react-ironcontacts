import React, { Component } from "react";
import contacts from "../contacts.json";
import "../App.css";
// import RandomButton from "./RandomButton";
import _ from "lodash";

let contactsArr = [];
class Table extends Component {
  constructor() {
    super();

    for (let i = 0; i < 5; i++) {
      contactsArr.push(contacts[i]);
    }

    this.state = {
      contacts: contactsArr
    };
  }

  addRandomContact = () => {
    let randomContact = Math.floor(Math.random() * contacts.length);
    contactsArr.push(contacts[randomContact]);
    this.setState({
      contacts: contactsArr
    });
  };

  sortbyPop = () => {
    let newContactsArr = [...this.state.contacts];
    newContactsArr = _.orderBy(newContactsArr, ["popularity"], ["desc"]);
    this.setState({
      contacts: newContactsArr
    });
  };

  sortbyName = () => {
    let evenNewerContactsArr = [...this.state.contacts];
    evenNewerContactsArr = _.orderBy(evenNewerContactsArr, ["name"], ["asc"]);
    this.setState({
      contacts: evenNewerContactsArr
    });
  };

  deleteContact = index => {
    const theNewestContactsArr = [...this.state.contacts]; // make copy of original array
    theNewestContactsArr.splice(index, 1); //then splice

    this.setState({
      contacts: theNewestContactsArr
    });
  };

  render() {
    return (
      <div>
        <table className="Table-container">
          <thead>
            <tr>
              <th>Name</th>
              <th>Image</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map((el, index) => {
              return (
                <tr key={index}>
                  <td>
                    <img className="Table-image" src={el.pictureUrl} />
                  </td>
                  <td>{el.name} </td>

                  <td>{el.popularity}</td>
                  <td>
                    {" "}
                    <button
                      className="Table-delete-btn"
                      //
                      onClick={() => this.deleteContact(index)}
                    >
                      {/* needs another function call because we are passing a argument */}
                      Delete contact
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="Table-btn-container">
          <button onClick={this.addRandomContact}>Add Random</button>
          <button onClick={this.sortbyName}>Order by Name</button>
          <button onClick={this.sortbyPop}>Order by Popularity</button>
        </div>
      </div>
    );
  }
}

export default Table;
