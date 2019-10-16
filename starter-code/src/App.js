import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";
// import Table from "./table";
import Contact from "./contacts";

let newContact = 0;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: contacts.slice(0, 5)
    };
  }

  getNewContact() {
    let randomNumb = Math.floor(Math.random() * contacts.length + 1);
    newContact = contacts.slice(randomNumb, randomNumb + 1);
    console.log(newContact);
    let listCopy = [...this.state.list]; //Why
    console.log(listCopy);
    listCopy.unshift(newContact[0]);
    this.setState({
      list: listCopy
    });
  }

  deleteContact(index) {
    let newCopy = [...this.state.list];
    newCopy.splice(index, 1);
    this.setState({
      list: newCopy
    });
  }

  getList() {
    return this.state.list.map((cont, idx) => {
      return (
        <Contact
          key={idx}
          pictureUrl={cont.pictureUrl}
          name={cont.name}
          popularity={cont.popularity}
          deleteContact={() => this.deleteContact(idx)}
        />
      );
    });
  }

  getSortListPop() {
    let newCopy = [...this.state.list];
    newCopy.sort((a, b) => (a.popularity < b.popularity ? 1 : -1));
    console.log(newCopy);
    this.setState({
      list: newCopy
    });
  }

  getSortListName() {
    let newCopy = [...this.state.list];
    newCopy.sort((a, b) => (a.name > b.name ? 1 : -1));
    console.log(newCopy);
    this.setState({
      list: newCopy
    });
  }

  render() {
    return (
      <div className="App">
        <button onClick={() => this.getNewContact()}>newCeleb</button>
        <button onClick={() => this.getSortListPop()}>PopularitySort</button>
        <button onClick={() => this.getSortListName()}>NameSort</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.getList()}</tbody>
        </table>
      </div>
    );
  }
}

export default App;
