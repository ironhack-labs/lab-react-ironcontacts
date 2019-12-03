import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";

let contactsList = [...contacts].splice(0, 5);
console.log(contactsList);

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: [...contactsList]
    };
    console.log(this.state);
  }

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
      return a.popularity- b.popularity;
    });
    this.setState({
      ...this.state,
      list: popularSorted
    });
  };


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
                <tr key={contact.id}>
                  <td>
                    <img src={contact.pictureUrl} alt='' />
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
