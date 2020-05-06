import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";
import Artist from "./components/Artists";

class App extends Component {
  state = {
    fiveartist: [...contacts.slice(0, 6)],
  };

  render() {
    console.log(this.state.fiveartist);
    const addArtist = () => {
      console.log("Markus");
      let randomNub = Math.floor(Math.random() * 199);
      let arrcopy = [...contacts.slice(randomNub + 6, randomNub + 7)];
      console.log(arrcopy);
      this.setState({ fiveartist: this.state.fiveartist.concat(arrcopy) });
    };

    const sortByName = () => {
      console.log("hello");
      this.setState({
        fiveartist: this.state.fiveartist.sort(function (a, b) {
          return a.name.localeCompare(b.name);
        }),
      });
    };

    const sortPopulary = () => {
      this.setState({
        fiveartist: this.state.fiveartist.sort(function (a, b) {
          return b.popularity - a.popularity;
        }),
      });
    };

    const deleteOneContact = (id) => {
      console.log("hello");
      this.setState({
        fiveartist: this.state.fiveartist.filter((elem) => {
          if (elem.id === id) return false;
          else return true;
        }),
      });
    };

    return (
      <div className="App">
        <button onClick={addArtist}>Add Random Artist</button>
        <button onClick={sortByName}>Sort by name</button>
        <button onClick={sortPopulary}>Sort Popularity</button>
        <table>
          <thead>
            <tr>
              <th>Photo</th>
              <th>Name</th>
              <th>Popularity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.fiveartist.map((artist) => (
              <tr>
                <td>
                  <img src={artist.pictureUrl} style={{ width: "100px" }} />
                </td>
                <td>{artist.name}</td>
                <td>{artist.popularity}</td>
                <td>
                  <button
                    onClick={() => {
                      deleteOneContact(artist.id);
                    }}
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
