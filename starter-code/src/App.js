import React, { Component } from "react";
/* import logo from "./logo.svg"; */
import "./App.css";
import Table from "./components/Table";
import contacts from "./contacts.json";
import TableHeader from "./components/TableHeader";
import Button from "./components/Button";

class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: contacts.slice(0, 5)
    };
    this.randomClick = this.randomClick.bind(this);
    this.sortByName = this.sortByName.bind(this);
    this.sortByPopularity = this.sortByPopularity.bind(this);
    this.delete = this.delete.bind(this);
  }

  randomClick() {
    const random = contacts[Math.floor(Math.random() * contacts.length)];
    const list = this.state.contacts.slice();
    if (!list.includes(random)) {
      list.push(random);
      this.setState({
        contacts: list
      });
    } else {
      this.randomClick();
    }
    console.log(this.state.contacts);
  }

  sortByName() {
    const sortedList = [...this.state.contacts];
    sortedList.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    this.setState({
      contacts: sortedList
    });
  }

  sortByPopularity() {
    const sortedList = [...this.state.contacts];
    sortedList.sort((a, b) => {
      if (a.popularity - b.popularity) {
        return -1;
      }
    });

    this.setState({
      contacts: sortedList
    });
  }

  delete(contactsCopyIndex) {
    const contactsCopy = this.state.contacts;
    contactsCopy.splice(contactsCopyIndex, 1);
    this.setState({
      contacts: contactsCopy
    });
  }

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <Button name="Add Random Contact" onClick={this.randomClick} />
        <Button name="Sort by name" onClick={this.sortByName} />
        <Button name="Sort by popularity" onClick={this.sortByPopularity} />
        {/* <button onClick={this.randomClick}>Sort by name</button>
    <button onClick={this.randomClick}>Sort by popularity</button> */}
        <table className="center-table">
          <thead>
            <TableHeader />
          </thead>
          <tbody>
            {this.state.contacts.map((contact, idx) => {
              return (
                <Table delete={this.delete} contact={contact} keys={idx} />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
