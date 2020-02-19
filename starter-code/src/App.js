import React, { Component } from "react";
import logo, { ReactComponent } from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";
const firstFive = [];
for (let i = 0; i < 5; i++) {
  firstFive.push(contacts[i]);
}
//console.log(contacts.length);

//console.log(randomNumber);
class Table extends Component {
  state = {
    firstContacts: firstFive
  };
  add = () => {
    let randomNumber = Math.floor(Math.random() * 199 + 5);
    this.state.firstContacts.push(contacts[randomNumber]);
    this.setState({
      firstContacts: this.state.firstContacts
    });
  };

  sortByName = () => {
    this.setState({
      firstContacts: this.state.firstContacts.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return -1;
        } else {
          return 1;
        }
      })
    });
  };

  sortByPopularity = () => {
    this.setState({
      firstContacts: this.state.firstContacts.sort((a, b) => {
        return b.popularity - a.popularity;
      })
    });
  };

  deleteItem = id => {
    console.log(id);

    //console.log(event.target.key);
    this.setState({
      firstContacts: this.state.firstContacts.filter(element => {
        console.log("elemento", element.id, "killer", id);
        return element.id !== id;

        /* if (element.id == id) {
          console.log("happening");
          return false;
          //console.log(element.id, id);
        } else {
          console.log(element.id, id);
          return true;
        }
      }) */
      })
    });
    console.log(firstFive);
  };

  render() {
    console.log(firstFive);
    return (
      <div>
        <button onClick={this.add}>Add random contact </button>
        <button onClick={this.sortByName}>Sort by name </button>
        <button onClick={this.sortByPopularity}>Sort by popularity </button>
        <table>
          <thead>
            <tr>
              <th>PICTURE</th>
              <th>NAME</th>
              <th>POPULARITY</th>
            </tr>
          </thead>
          <tbody>
            {this.state.firstContacts.map(elem => {
              return (
                <tr key={elem.id}>
                  <td>
                    <img src={elem.pictureUrl} />
                  </td>
                  <td>{elem.name}</td>
                  <td>{elem.popularity}</td>
                  <td>
                    <button onClick={() => this.deleteItem(elem.id)}>
                      Delete
                    </button>
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

class App extends Component {
  render() {
    return (
      <div className="App">
        <Table />
      </div>
    );
  }
}

export default App;
