import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: contacts.slice(0, 5),
      allContacts: contacts.slice(5, -5)
    };
  }

  addContact() {
    const firstOne = this.state.contacts;
    const secondArray = this.state.allContacts;
    const randomStarIndex = Math.floor(Math.random() * secondArray.length);
    console.log(randomStarIndex);
    firstOne.push(secondArray[randomStarIndex]);
    secondArray.splice([randomStarIndex], 1);

    this.setState({ contacts: firstOne });
  }

  sortName() {
    const firstArray = this.state.contacts;
    firstArray.forEach(oneName => {
      console.log(oneName.name);
    });
    // console.log(firstArray);
    this.setState({ contacts: firstArray });
  }

  render() {
    const starArray = this.state.contacts;
    // starArray.slice(0, 5);
    console.log(this.state);
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <section className="StarList" />
        <button onClick={() => this.addContact()}>Add Random Contact</button>
        <button onClick={() => this.sortName()}>Sort by Name</button>
        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
          {starArray.map((oneStar, index) => {
            return (
              <tr key={oneStar.name}>
                <td>
                  <img src={oneStar.pictureUrl} />
                </td>
                <td>{oneStar.name}</td>
                <td>{oneStar.popularity}</td>
              </tr>
            );
          })}
        </table>

        <footer>Made with Love by Alex</footer>
      </div>
    );
  }
}

export default App;
