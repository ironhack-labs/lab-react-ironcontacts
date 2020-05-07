import React, { Component, Fragment } from "react";
import "./App.css";
import contacts from "./contacts.json";
import Contactcard from "./components/Contactcard.js";

class App extends Component {
  state = {
    celebs: contacts.slice(0, 5),
  };

  addRandomContact = () => {
    // needs to be a function!not (){}
    const celebsCopy = this.state.celebs;
    celebsCopy.push(
      contacts[Math.floor(Math.random() * contacts.length - 1) + 1]
    );
    this.setState({
      celebs: celebsCopy, // update celebs with the copy
    });
  };

  dynamicSort = (property) => {
    var sortOrder = 1;
    if (property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
    }
    return function (a, b) {
      /* next line works with strings and numbers,
       * and you may want to customize it to your needs
       */
      var result =
        a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
      return result * sortOrder;
    };
  };

  delete = (celeb) => {
    const celebsCopy = this.state.celebs;
    console.log(celeb);
    celebsCopy.splice(celebsCopy.indexOf(celeb), 1); // delete by celeb.id ??? How?
    this.setState({
      celebs: celebsCopy,
    });
  };

  sortByName = () => {
    const celebsCopy = this.state.celebs;
    console.log(celebsCopy);
    celebsCopy.sort(this.dynamicSort("name"));
    console.log(celebsCopy);
    this.setState({
      celebs: celebsCopy,
    });
  };

  sortByPopularity = () => {
    const celebsCopy = this.state.celebs;
    celebsCopy.sort(this.dynamicSort("popularity"));
    this.setState({
      celebs: celebsCopy,
    });
  };

  render() {
    return (
      <Fragment>
        <h1>IronContacts</h1>

        <button onClick={this.addRandomContact}>Add a Contact</button>
        <button onClick={this.sortByName}>Sort by Name</button>
        <button onClick={this.sortByPopularity}>Sort by Popularity</button>

        <Contactcard celebs={this.state.celebs} delete={this.delete} />
      </Fragment>
    );
  }
}

export default App;
