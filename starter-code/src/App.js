import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";

class App extends Component {



  state = {
    contacts: contacts.slice(0, 5),
  };

getRandomGuy() {
   return  contacts[Math.floor(Math.random() * contacts.length)]
  }


addRandomContact = e => {
  const copy = [...this.state.contacts];
        copy.push(this.getRandomGuy());
        this.setState({ contacts:copy});
};

sortByName = e => {
  const copy = [...this.state.contacts];
        copy.sort(function (a, b) {
         if (a.name < b.name) return -1;
         if (a.name > b.name) return 1;
        return 0;
        });
        this.setState({ contacts:copy});
};

sortByPopularity = e => {
  const copy = [...this.state.contacts];
        copy.sort(function (a, b) {
         return a.popularity - b.popularity
        });
        this.setState({ contacts:copy});
};

deleteCeleb = index => {
  const copy = [...this.state.contacts];
  copy.splice(index, 1);
  this.setState({ contacts:copy});
}


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h1>IronContacts</h1>
        <button onClick={this.addRandomContact}>Add Random Contact </button>
        <button onClick={this.sortByName}>Sort By Name </button>
        <button onClick={this.sortByPopularity}>Sort By Popularity </button>
        <table>
          <thead>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>
          </thead>
          <tbody>
            {this.state.contacts.map((contact, i) => (
              <tr key={i}>
                <td><img className="celeb-image" src={contact.pictureUrl}></img></td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td><button onClick={() => this.deleteCeleb(i)}>Delete</button></td>
              </tr>
            ))}
            
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
