import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";
import { clone } from "@babel/types";

class App extends Component {
  state = {
    contacts: contacts.splice(0, 5),
    allContacts: contacts
  };

  // list of celebrities
  showListOfCelebrities = () => {
    // console.log(this.state.contacts);
    let listOfCelebrities = this.state.contacts.map((eachCeleb, i) => {
      return (
        <li key={i}>
          <img
            alt="if you're seeing this the internet probably died"
            src={eachCeleb.pictureUrl}
          />{" "}
          {eachCeleb.name} {eachCeleb.popularity}
          <button onClick={this.deleteCelebrity}> Delete </button>
        </li>
      );
    });
    // console.log(listOfCelebrities);
    return listOfCelebrities;
  };

  //random celebrities
  randomCelebrity = () => {
    let allContactsCelebs = this.state.allContacts;

    let randomIndex = Math.floor(Math.random() * allContactsCelebs.length);
    let newCelebs = this.state.allContacts[randomIndex];

    let copyContacts = [...this.state.contacts];

    copyContacts.push(newCelebs);

    allContactsCelebs.splice(randomIndex, 1);

    this.setState({
      contacts: copyContacts,
      allContacts: allContactsCelebs
    });

    return newCelebs;
  };

  // sort celbrities
  sortCelebrities = () => {
    console.log("button works");

    var clonedArray = [...this.state.contacts];
    console.log(clonedArray);
    var thisSorted = clonedArray.sort(function(a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });

    console.log(thisSorted);

    this.setState({
      contacts: thisSorted
    });
  };


  // sort by popularity
  sortPop = () => {
    console.log("pop works");

    var clonedPopularity = [...this.state.contacts];
  var thisPop = clonedPopularity.sort(function(a, b) {
    if (a.popularity < b.popularity) {
      return -1;
    }
    if (a.popularity > b.popularity) {
      return 1;
    }
    return 0;
  });

  this.setState({
    contacts: thisPop
  })
}




deleteCelebrity = (index)=>{

let contactList = [...this.state.contacts]
contactList.splice(index, 1)

this.setState({
  contacts: contactList
})
}

  render() {
    // console.log(this.state);
    return (
      <div className="App">
        <button onClick={this.randomCelebrity}> Add New Celebrity </button>
        <button onClick={this.sortCelebrities}> Sort Celebrities </button>
        <button onClick={this.sortPop}> Sort by Popularity </button>
        

        <ul>{this.showListOfCelebrities()}</ul>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"> Welcome to React </h1>
        </header>
        <p className="App-intro"></p>
      </div>
    );
  }
}

export default App;
