import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";

class App extends Component {
  state = {
    contactList: contacts.slice(0, 5)
  };

  addRandom = () => {
    const random = contacts[Math.floor(Math.random() * contacts.length)];
    const newArr = [...this.state.contactList];
    newArr.push(random);
    this.setState({ contactList: newArr });
  };

  filterName = () => {
    const alphabeticalOrder = this.state.contactList.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      } else {
        return 1;
      }
    });

    this.setState({ contactList: alphabeticalOrder });
  };

  filterPopularity = () => {
    const popularityOrder = this.state.contactList.sort((a, b) => {
      return b.popularity - a.popularity;
    });
    this.setState({ contactList: popularityOrder });
  };

  delete = id => {
    const contactsCopy = this.state.contactList.filter(el => el.id !== id);
    this.setState({ contactList: contactsCopy });
  };

  render() {
    return (
      <div className='App'>
        <h1>IronContacts</h1>
        <div className='buttons'>
          <button onClick={this.addRandom}>Add Random Contact</button>
          <button onClick={this.filterName}>Filter by Name</button>
          <button onClick={this.filterPopularity}>Filter by Popularity</button>
        </div>
        <table>
          <thead>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </thead>
          {this.state.contactList.map(el => {
            return (
              <tr key={el.id}>
                <td>
                  <img src={el.pictureUrl} alt='' />
                </td>
                <td> {el.name}</td>
                <td>{el.popularity.toFixed(2)}</td>
                <td>
                  <button
                    onClick={() => {
                      this.delete(el.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}

export default App;
