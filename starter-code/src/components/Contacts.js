import React, { Component } from "react";
import contacts from "../contacts.json";
import Row from "./Row";
import "bulma/css/bulma.css";

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
    var celebCopy = this.state.celebrities;
    celebCopy.push(this.findRandomContact());
    this.setState({
      celebrities: celebCopy
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

  deleteCelebrity = index => {
    var celebCopy = [...this.state.celebrities];
    celebCopy.splice(index, 1);
    this.setState({
      celebrities: celebCopy
    });
  };

  render() {
    if (this.state.celebrities.length == 0) {
      return (
        <div className="contacts">
          <h1>IronContacts</h1>
          <button className="button" onClick={this.addRandomContact}>
            Add Random Contact
          </button>
          <button className="button" onClick={this.sortByName}>
            Sort by Name
          </button>
          <button className="button" onClick={this.sortByPopularity}>
            Sort by Popularity
          </button>
          <h2>ADD A CELEBRITY</h2>
        </div>
      );
    } else {
      return (
        <div className="contacts">
          <h2>IronContacts</h2>
          <button
            className="button is-info is-small is-outlined"
            onClick={this.addRandomContact}
          >
            Add Random Contact
          </button>
          <button
            className="button is-info is-small is-outlined"
            onClick={this.sortByName}
          >
            Sort by Name
          </button>
          <button
            className="button is-info is-small is-outlined"
            onClick={this.sortByPopularity}
          >
            Sort by Popularity
          </button>
          <table className="table is-bordered is-striped is-narrow is-hoverable">
            <tbody>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>Action</th>
              </tr>
              {this.state.celebrities.map((x, index) => (
                <Row
                  key={index}
                  pictureUrl={x.pictureUrl}
                  name={x.name}
                  popularity={x.popularity.toFixed(2)}
                  clickToDelete={this.deleteCelebrity.bind(this, index)}
                />
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  }
}

export default Contacts;
