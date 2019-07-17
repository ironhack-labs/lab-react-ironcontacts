import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";
import Row from "./Row";
import Navbar from "./Navbar";

// console.log(contacts)

// const shuffled = contacts.sort(() => 0.5 - Math.random());

// let selected = shuffled.slice(0, 5)

// console.log(selected)

class App extends Component {
  constructor() {
    super();
    this.state = {
      celebs: contacts.slice(0, 5)
    };
    this.actName = 0;
    this.actPop = 0;
  }

  addRandomCeleb() {
    let random = [...contacts].filter(
      celeb =>
        this.state.celebs
          .map(sortCeleb => sortCeleb.name)
          .indexOf(celeb.name) === -1
    );

    let selectRandom = random[Math.floor(Math.random() * random.length)];

    this.state.celebs.push(selectRandom);

    this.setState({ ...this.state });
  }

  sortByName() {
    this.actName++;
    if (this.actName % 2 === 0) {
      this.state.celebs.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }

        if (a.name > b.name) {
          return 1;
        }

        return 0;
      });
    } else {
      this.state.celebs.sort((a, b) => {
        if (a.name > b.name) {
          return -1;
        }

        if (a.name < b.name) {
          return 1;
        }

        return 0;
      });
    }

    this.setState({ ...this.state });
  }

  sortByPopularity() {
    this.actPop++;

    if (this.actPop % 2 === 0) {
      this.state.celebs.sort((a, b) => {
        if (a.popularity < b.popularity) {
          return -1;
        }

        if (a.popularity > b.popularity) {
          return 1;
        }

        return 0;
      });
    } else {
      this.state.celebs.sort((a, b) => {
        if (a.popularity > b.popularity) {
          return -1;
        }

        if (a.popularity < b.popularity) {
          return 1;
        }

        return 0;
      });
    }

    this.setState({ ...this.state });
  }

  deleteElement(celebName) {
    this.setState({
      celebs: this.state.celebs.filter(celeb => celeb.name !== celebName)
    });
  }

  render() {
    return (
      <section>
        <Navbar />
        <div className="potorrocolumn">
          <h1>Rent a Celebrity by Amazon</h1>
          <table>
            <tbody>
            <tr>
                <td colSpan="4">
                  <button className="btn" onClick={() => this.addRandomCeleb()}>
                    Add Random Celebrity
                  </button>
                  <button className="btn" onClick={() => this.sortByName()}>
                    Sort by name
                  </button>
                  <button
                    className="btn"
                    onClick={() => this.sortByPopularity()}
                  >
                    Sort by popularity
                  </button>
                </td>
              </tr>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>Action</th>
              </tr>
             
              {this.state.celebs.map((celeb, idx) => {
                return (
                  <Row
                    picture={celeb.pictureUrl}
                    key={idx}
                    name={celeb.name}
                    popularity={celeb.popularity}
                    button={
                      <button
                        className="btn"
                        onClick={() => this.deleteElement(celeb.name)}
                      >
                        Delete
                      </button>
                    }
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    );
  }
}

export default App;
