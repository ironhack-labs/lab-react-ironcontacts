import React, { Component } from "react";
import "./App.css";
import contacts from "./contacts.json";

class App extends Component {
  state = {
    counter: 0,
    contactsArr: [
      contacts[0],
      contacts[1],
      contacts[2],
      contacts[3],
      contacts[4]
    ]
  };
  addRandom = () => {
    let rnd = Math.floor(Math.random() * contacts.length) + 5;
    const { contactsArr } = this.state;
    contactsArr.push(contacts[rnd]);
    this.setState({
      contactsArr
    });
  };
  sortByName = () => {
    const contactsArr = [...this.state.contactsArr];
    this.setState({
      contactsArr: contactsArr.sort((a, b) => this.compare(a.name, b.name))
    });
  };

  compare = (a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  };
  sortByPop = () => {
    console.log("ok");
  };
  render() {
    return (
      <div className="App">
        <h1>Iron Contacts</h1>
        <button onClick={this.addRandom}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort By name</button>
        <button onClick={this.sortByPop}>Sort By Popularity</button>

        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>

          {this.state.contactsArr.map((contact, index) => {
            return (
              <tr key={index}>
                <td>
                  <img src={contact.pictureUrl} alt="" width="100px" />
                </td>
                <td>
                  <h3>{contact.name} </h3>
                </td>
                <td>
                  {" "}
                  <h4> {contact.popularity} </h4>{" "}
                </td>
              </tr>
            );
          }, 0)}
        </table>
      </div>
    );
  }
}

export default App;
