import React, { Component } from "react";
import contacts from "../contacts.json";

class Contacts extends Component {
  state = {
    base: contacts.slice(0, 5),
    sort: false,
  };
  addRandom = () => {
    let ran = contacts[Math.floor(Math.random() * contacts.length)];
    this.setState({ base: [...this.state.base, ran] });
  };
  sortName = () => {
    this.setState({
      base: this.state.base.sort((a, b) => (a.name > b.name ? 1 : -1)),
    });
  };
  sortPop = () => {
    this.setState({
      base: this.state.base.sort((a, b) => b.popularity - a.popularity),
    });
  };
  deleteOne = (index) => {
    this.setState({
      base: this.state.base.filter((base, contactIndex) => {
        return contactIndex !== index;
      }),
    });
  };
  render() {
    return (
      <div className="container">
        <h1>IronContacts</h1>
        <div className="button">
          <button onClick={this.addRandom}>Add Random Contact</button>
          <button onClick={this.sortName}>Sort by name</button>
          <button onClick={this.sortPop}>Sort by popularity</button>
        </div>

        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.state.base.map((contact, index) => (
              <tr key={index}>
                <td>
                  <img src={contact.pictureUrl} className="img" alt="" />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <button onClick={(event) => this.deleteOne(index)}>
                  Remove
                </button>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Contacts;
