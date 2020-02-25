import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";

class App extends Component {
  state = {
    contactList: contacts.slice(0, 5)
  };

  randomContactHandler = () => {
    const contactLength = contacts.length;
    const randomID = Math.floor(Math.random() * contactLength);
    const randomContact = contacts[randomID];

    if (randomContact in this.state.contactList) {
      this.randomContactHandler();
    } else {
      const updatedContactList = [...this.state.contactList, randomContact];
      this.setState({ contactList: updatedContactList });
    }
  };

  handleSortByName = () => {
    const sortedArray = [...this.state.contactList];
    sortedArray.sort((a, b) => {
      if (a.name > b.name) return 1;
      else if (a.name < b.name) return -1;
      return 0;
    });

    this.setState({ contactList: sortedArray });
  };

  handleSortByPop = () => {
    const sortedArray = [...this.state.contactList];
    sortedArray.sort((a, b) => {
      if (a.popularity > b.popularity) return -1;
      else if (a.popularity < b.popularity) return 1;
      return 0;
    });
    this.setState({ contactList: sortedArray });
  };

  handleDelete = id => {
    const filteredArray = this.state.contactList.filter(
      oneContact => oneContact.id != id
    );
    this.setState({ contactList: filteredArray });
  };

  render() {
    return (
      <div>
        <button onClick={this.randomContactHandler}>Random Contact</button>
        <button onClick={this.handleSortByName}>Sort by name</button>
        <button onClick={this.handleSortByPop}>Sort by popularity</button>
        <table>
          <tbody>
            {this.state.contactList.map(oneMovie => {
              return (
                <tr key={oneMovie.id}>
                  <td>
                    <img
                      src={oneMovie.pictureUrl}
                      alt=""
                      width="250"
                      height="250"
                    />
                  </td>
                  <td>{oneMovie.name} </td>
                  <td>{oneMovie.popularity.toFixed(2)}</td>
                  <td>
                    <button onClick={() => this.handleDelete(oneMovie.id)}>
                      Delete Contact{" "}
                    </button>{" "}
                  </td>
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
