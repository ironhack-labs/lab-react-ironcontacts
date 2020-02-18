import React, { Component } from "react";
import "./App.css";
import PersonList from "./components/PersonList";
import data from "./contacts.json";

class App extends Component {
  state = {
    newData: data.slice(0,5),
  };

  addContact = () => {
      const nuevo = data[Math.floor(Math.random() * (data.length - 5) + 5)]
      this.setState(
        {newData: [...this.state.newData, nuevo]}
      )
  }

  sortByName = () => {
    const nuevo = [...this.state.newData].sort((a,b) => a.name.localeCompare(b.name))
    console.log(nuevo)
      this.setState(
        {newData: nuevo}
      )
  }

  sortByPopularity = () => {
    const nuevo = [...this.state.newData].sort((a,b) => a.popularity-b.popularity)
    console.log(nuevo)
    this.setState(
      {newData: nuevo}
    )
  }

  deleteCharacter = index => {
    const borra = [...this.state.newData]
    borra.splice(index,1)
    this.setState(
      {newData: borra}
    )
  }

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={this.addContact}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPopularity}>Sort by popularity</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
        {this.state.newData.map((e,i) => (
          <PersonList
            photoUrl={e.pictureUrl}
            name={e.name}
            popularity={e.popularity}
            key={i}
            index={i}
            deleteCharacter={this.deleteCharacter}
          />
        ))}

          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
