import React from "react";
import "./App.css";
import "bulma/css/bulma.min.css";
import contacts from "./contacts.json";

class App extends React.Component {
  state = {
    people: [contacts[0], contacts[1], contacts[2], contacts[3], contacts[4]],
    arr: [],
  };

  addRandom = () => {
    let max = 52;
    let min = 5;

    let numRandom = Math.floor(Math.random() * (max - min + 1)) + min;
    if (this.state.arr.includes(numRandom)) {
      this.addRandom();
    } else {
      this.setState((state) => ({
        arr: [numRandom, ...state.arr],
        people: [contacts[numRandom], ...state.people],
      }));
    }
  };

  sortByName = () => {
    const name = []
      .concat(this.state.people)
      .sort((a, b) => (a.name > b.name ? 1 : -1));

    this.setState({ people: name });
  };

  sortByPopularity = () => {
    const popularity = []
      .concat(this.state.people)
      .sort((a, b) => (a.popularity > b.popularity ? 1 : -1));

    this.setState({ people: popularity });
  };

  deleteThis = (e) => {
    const copyArr = this.state.people;
    const copyIndex = copyArr.findIndex((item) => item.id === e.target.value);
    copyArr.splice(copyIndex, 1);
    this.setState({
      people: copyArr,
    });
  };

  render() {
    const list = this.state.people.map((el) => (
      <tr key={el.id}>
        <td>
          <img className="avatar" src={el.pictureUrl} alt="" />
        </td>
        <td>{el.name}</td>
        <td>{el.popularity}</td>
        <td>
          <button
            className="button is-danger is-small"
            value={el.id}
            onClick={this.deleteThis}
          >
            Delete
          </button>
        </td>
      </tr>
    ));

    return (
      <div className="columns is-centered">
        <div className="column is-narrow">
          <div className="columns">
            <div className="column">
              <div className="content">
                <h1>IronContacts</h1>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <div className="field is-grouped">
                <p className="control">
                  <button className="button is-small" onClick={this.addRandom}>
                    Add Random Contact
                  </button>
                </p>
                <p className="control">
                  <button className="button is-small" onClick={this.sortByName}>
                    Sort by name
                  </button>
                </p>
                <p className="control">
                  <button
                    className="button is-small"
                    onClick={this.sortByPopularity}
                  >
                    Sort by popularity
                  </button>
                </p>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <table className="table">
                <thead>
                  <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>{list}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
