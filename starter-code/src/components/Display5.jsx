import React, { Component } from "react";
import "./../App.css";
import contacts from "./../contacts.json";

export default class Display5 extends Component {
  state = {
    celebrity: [...contacts],
    celebrity5: [...contacts].slice(0, 5)
  };

  handleAdd = () => {
    let randomIndex = Math.round(Math.random() * contacts.length);
    console.log("Clicked!");

    const copy = [...this.state.celebrity5];
    copy.push(contacts[randomIndex]);
    this.setState({ celebrity5: copy });
  };

  sortByName = () => {
    const copy = [...this.state.celebrity5];
    copy.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      } else if (a.name < b.name) {
        return -1;
      } else {
        return 0;
      }
    });
    this.setState({ celebrity5: copy });
  };

  sortByPopularity = () => {
    const copy = [...this.state.celebrity5];
    copy.sort((a, b) => b.popularity - a.popularity);
    this.setState({ celebrity5: copy });
  };

  handleDelete = i => {
    const copy = [...this.state.celebrity5];
    copy.splice(i, 1);
    this.setState({ celebrity5: copy });
  };

  render() {
    return (
      <div>
        <h1>Iron Contacts</h1>
        <button onClick={this.handleAdd}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPopularity}>Sort by popularity</button>
        <table className="table-contacts">
          <thead>
            <tr>
              <th>
                <b>Picture</b>
              </th>
              <th>
                <b>Name</b>
              </th>
              <th>
                <b>Popularity</b>
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.celebrity5.map((c, i) => (
              <tr>
                <td key={i}>
                  <img src={c.pictureUrl} alt="" />
                </td>
                <td key={i}>{c.name}</td>
                <td key={i}>{Math.round(c.popularity * 100) / 100}</td>
                <td key={i}>
                  <button onClick={() => this.handleDelete(i)}>DELETE</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
