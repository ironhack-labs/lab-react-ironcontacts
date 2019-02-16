import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";
import _ from 'lodash'

class App extends Component {
  constructor() {
    super();
    this.state = { contacts: contacts.slice(0, 5) };
  }

  addRandomContact() {
    const randomactor = _.sample(_.difference(contacts, this.state.contacts));
    let newstate = this.state.contacts.concat([randomactor]);  //concat erzeugt neuen Array als Kopie, so dass das Original nicht verändert werden muss
    this.setState({
      contacts: newstate
    });
}

  sortbyName(){
    const newstate = _.sortBy(this.state.contacts, "name");
    this.setState({
      contacts: newstate
    })
  }


  sortbyPopularity(){
    const newstate = _.sortBy(this.state.contacts, "popularity");
    this.setState({
      contacts: newstate
    })
  }


    deleteContact = (i) => {
      const contactsCopy = [...this.state.contacts];
      contactsCopy.splice(i,1)
      this.setState({
          contacts: contactsCopy
      })
    }
  


  render() {
    return (
      <div>
        <button onClick={() => this.addRandomContact()}>
          Add Random Contact
        </button>
        <button onClick={() => this.sortbyName()}>
          Sort By Name
        </button>
        <button onClick={() => this.sortbyPopularity()}>
          Sort By Popularity
        </button>
        <table>
          <tbody>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>...</th>
          </tr>

          {this.state.contacts.map((e, i) => (
            <tr key={i}>
              <td >
                <img width="100px" src={e.pictureUrl} />
              </td>
              <td >{e.name}</td>
              <td >{e.popularity}</td>
              <td>
              <button onClick={() => this.deleteContact(i)}>
          Delete
        </button></td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
