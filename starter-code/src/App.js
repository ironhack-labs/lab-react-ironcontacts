import React, { Component } from "react";
import "./App.css";
import contacts from "./contacts.json";

class App extends Component {

  state = {
    fiveContacts: contacts.slice(0, 5)
  };

  showFiveContacts = () => {
    return this.state.fiveContacts.map((eachContact, index) => {
      return (
        <tr key={index}>
          <th>
            <img src={eachContact.pictureUrl} alt={eachContact.name} />
          </th>
          <th>{eachContact.name}</th>
          <th>{(eachContact.popularity).toFixed(2)}</th>
        </tr>
      );
    });
  };

  addActor = () => {
    let x = Math.floor(Math.random()*199)
    let newArr = [...this.state.fiveContacts]
    newArr.push(contacts[x]);
    this.setState({
      fiveContacts: newArr
    })
  }

  sortByName = () => {
    let sortNameArr = [...this.state.fiveContacts];
    sortNameArr.sort(
      (a, b) =>
      a.name.localeCompare(b.name)
    );
    this.setState({
      fiveContacts: sortNameArr
    });
  }

  sortByPopularity = () => {
    let sortPopularityArr = [...this.state.fiveContacts];
    sortPopularityArr.sort(
      (a, b) =>
      a.popularity - b.popularity
    ).reverse();
    this.setState({
      fiveContacts: sortPopularityArr
    });
  }

  render() {
    console.log("Render App.js");
    console.log(this.state.fiveContacts);
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={() => this.addActor()}>Add Actor</button>
        <button onClick={() => this.sortByName()}>Sort by Name</button>
        <button onClick={() => this.sortByPopularity()}>Sort by Popularity</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>{this.showFiveContacts()}</tbody>
        </table>
      </div>
    );
  }
}









export default App;
