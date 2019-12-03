import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";
import Contact from "./contact";

let contactsList = [...contacts].splice(0, 5);
console.log(contactsList);

class App extends Component {
  constructor() {
    super();
    this.deleteContact=this.deleteContact.bind(this)
  }
  state = {
      list: [...contactsList]
    };

  addRandom = () => {
    let filteredArr = [...contacts].filter(contact => !this.state.list.includes(contact));
    console.log(filteredArr.length);
    let newContact = filteredArr[Math.floor(Math.random() * contacts.length)];
    let newArray = [...this.state.list];
    newArray.push(newContact);
    this.setState({
      ...this.state,
      list: newArray
    });
  };

  sortName = () => {
    let nameSorted = [...this.state.list].sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    this.setState({
      ...this.state,
      list: nameSorted
    });
  };

  sortPopularity = () => {
    let popularSorted = [...this.state.list].sort((a, b) => {
      return b.popularity - a.popularity;
    });
    this.setState({
      ...this.state,
      list: popularSorted
    });
  };

deleteContact=(idx)=>{
  let cleanArr= [...this.state.list]
  cleanArr.splice(idx,1)
    this.setState({
      ...this.state,
      list: cleanArr
    });
}


  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Ironcontacts</h1>
        </header>
        <button onClick={() => this.addRandom()}>Add Random Contact</button>
        <button onClick={() => this.sortName()}>Sort by name</button>
        <button onClick={() => this.sortPopularity()}>Sort by popularity</button>
        <table>
          <thead>
            <tr>
              <th>Photo</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>

          <tbody>
            {this.state.list.map((contact, idx) => {
              return (
                <Contact idx={idx.toString()} {...contact} delete={this.deleteContact}>

                </Contact>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
