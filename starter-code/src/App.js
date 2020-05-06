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
      let arrcopy = [...contacts.slice(randomNub, randomNub + 1)];
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
          return a.popularity - b.popularity;
        }),
      });
    };
    return (
      <div className="App">
        <button onClick={addArtist}>Add Random Artist</button>
        <button onClick={sortByName}>Sort by name</button>
        <button onClick={sortPopulary}>Sort Popularity</button>
        <table>
          <tr>
            <th>Photo</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
          {this.state.fiveartist.map((artist) => (
            <Artist key={artist.id} artist={artist}></Artist>
          ))}
        </table>
      </div>
    );
  }
}

export default App;
