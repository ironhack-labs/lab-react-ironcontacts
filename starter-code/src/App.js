import React, { Component } from "react";
import "./App.css";
import contacts from "./contacts.json";

class App extends Component {
  state = {
    contacts: contacts.splice(0, 5),
  };

  placeRandomContact = () => {
    // Get first a random element from the contacts array
    const rndCnt = contacts[Math.floor(Math.random() * contacts.length - 1)];
    // Push that element to the current state of the contacts array
    this.state.contacts.push(rndCnt);
    // Set the state of contacts to the current state of contacts
    this.setState({ contacts: this.state.contacts });
  };

  sortArray = (property, order) => {
    const doSort = (a, b) => {
      // if order equals "desc", then reverse the sort order by multiplying the return value with -1
      // Otherwise just multiply it with 1 (don't change the number)
      const orderType = order === "desc" ? -1 : 1;
      // a should come before b in the sorted order
      if (a[property] < b[property]) {
        return -1 * orderType;
        // a should come after b in the sorted order
      } else if (a[property] > b[property]) {
        return 1 * orderType;
      } else {
        // a and b are the same
        return 0 * orderType;
      }
    };
    this.state.contacts.sort(doSort);
    this.setState({ contacts: this.state.contacts });
  };

  deleteElement = (index) => {
    this.state.contacts.splice(index, 1);
    this.setState({ contacts: this.state.contacts });
  };

  render() {
    return (
      <div className="App">
        <br />
        <p>
          <button onClick={this.placeRandomContact}>Add a random Contact</button>
          <button onClick={() => this.sortArray("name", "asc")}>Sort by name</button>
          <button onClick={() => this.sortArray("popularity", "desc")}>Sort by popularity</button>
        </p>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
              </tr>
            </thead>
            <tbody>
              {this.state.contacts.map((element, key) => (
                <tr key={key}>
                  <td>
                    <img src={element.pictureUrl} alt="picturito" />
                  </td>
                  <td>
                    <p>{element.name}</p>
                  </td>
                  <td>
                    <p>{element.popularity.toFixed(2)}</p>
                  </td>
                  <td>
                    <p>
                      <button onClick={() => this.deleteElement(key)}>Delete</button>
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <br />
      </div>
    );
  }
}

export default App;
