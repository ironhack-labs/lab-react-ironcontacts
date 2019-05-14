import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";

class App extends Component {
  state = {
    listOfPeople: [],
    people: contacts.splice(0, 5),
    contacts: contacts
  };

  randomPeople = e => {
    let randomPerson = this.state.people;
    let person = contacts[Math.floor(Math.random() * contacts.length)];
    console.log("---------", person);
    randomPerson.push(person);
    console.log(">>>>>>>>>>>>>", randomPerson);
    this.setState({
      people: randomPerson
    });
  };

  sortName = e => {
    console.log("the state of the people >>>>>>>>>>> ", this.state.people);
    var orderNames = [];
    for (var i = 0; i < this.state.people.length; i++) {
      orderNames.push(this.state.people[i]);
    }
    orderNames.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));
    console.log(orderNames);

    this.setState({
      people: orderNames
    });
  };



  sortPopularity = e => {
    console.log("the state of the people >>>>>>>>>>> ", this.state.people);
    var orderPopularity = [];
    for (var i = 0; i < this.state.people.length; i++) {
      orderPopularity.push(this.state.people[i]);
    }
    orderPopularity.sort((a, b) => (a.popularity > b.popularity ? -1 : b.popularity > a.popularity ? 1 : 0));
    console.log(orderPopularity);

    this.setState({
      people: orderPopularity
    });
  };


  delete = (i) => {
    let peopleCopy = [ ... this.state.people]
    peopleCopy.splice(i,1)
    this.setState( {
      people: peopleCopy
    })

  }

  render() {
    return (
      <div>
        <h1>IronContacts</h1>
        <button class="button" onClick={this.randomPeople}>Add Random Contact</button>
        <button class="button" onClick={this.sortName}>Sort by Name</button>
        <button class="button" onClick={this.sortPopularity}>Sort by Popularity</button>      
        <table class="table">
          <tr>
            <th>
              <strong >Picture</strong>
            </th>
            <th>
              <strong>Name</strong>
            </th>
            <th>
              <strong>Popularity</strong>
            </th>
            <th>
              <strong>Action</strong>
            </th>
          </tr>
          {this.state.people.map((people, i) => {
            return (
              <tr key={i}>
                <td  class="picture">
                  <img src={people.pictureUrl} width="100" />
                </td>
                <td>{people.name}</td>
                <td>{people.popularity}</td>
                <td><button class="delete" onClick={()=>{this.delete(i)}}>Delete</button></td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}

export default App;
