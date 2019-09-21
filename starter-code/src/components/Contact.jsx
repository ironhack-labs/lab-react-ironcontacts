import React, { Component } from "react";
import contacts from "../contacts.json";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: contacts.slice(0, 5)
    };
  }

  addRandomContact = e => {
    e.preventDefault();
    let newIndex =
      Math.floor(Math.random() * (contacts.length - 6 - 6 + 1)) + 6;
    console.log(contacts[newIndex]);

    let newList = [...this.state.list];

    newList.unshift(contacts[newIndex]);
    this.setState({
      list: newList
    });
  };

  sortByName = e => {
    e.preventDefault();

    let newListSortedByName = [...this.state.list];
    newListSortedByName.sort(function(a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });

    this.setState({
      list: newListSortedByName
    });
  };

  sortByPopularity = e => {
    e.preventDefault();

    let newListSortedByPopularity = [...this.state.list];
    newListSortedByPopularity.sort(function(a, b) {
      return b.popularity - a.popularity;
    });

    this.setState({
      list: newListSortedByPopularity
    });
  };

  deleteContact = index => {
    console.log(index);
    let updatedList = [...this.state.list];
    updatedList.splice(index, 1);
    this.setState({
      list: updatedList
    });
  };

  render() {
    return (
      <div>
        <h1>IronContacts</h1>
        <button onClick={this.addRandomContact}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort by Name</button>
        <button onClick={this.sortByPopularity}>Sort by Popularity</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.list.map((contact, index) => (
              <tr key={index}>
                <td>
                  <img src={this.state.list[index].pictureUrl} alt="" />
                </td>
                <td>{this.state.list[index].name}</td>
                <td>{this.state.list[index].popularity}</td>
                <td>
                  <button
                    onClick={() => {
                      this.deleteContact(index);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Contact;
