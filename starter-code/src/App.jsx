// --- module ---
import React, { Component } from "react";
// --- path ---
import Contacts from "./contacts.json";
// --- style ---
import "./App.css";

//

// --- iteration 1 ---
class App extends Component {
  state = {
    starsFromContacts: [...Contacts].slice(0, 5),
  };

  // --- iteration 2 ---
  randomAdd = (e) => {
    console.log("randomadd button have been clicked");
    //
    const luckyStar = Contacts[Math.floor(Math.random() * Contacts.length)];
    console.log(luckyStar.name);
    //

    const starsFromContactsCopy = [...this.state.starsFromContacts];
    const luckyStarPushed = starsFromContactsCopy.push(luckyStar);
    console.log(luckyStarPushed);
    //
    this.setState({
      starsFromContacts: starsFromContactsCopy,
    });
  };

  // --- iteration 3 ---
  sortByName = (e) => {
    console.log("Sort by name clicked");
    //
    const sortedByName = [...this.state.starsFromContacts].sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    //
    this.setState({
      starsFromContacts: sortedByName,
    });
  };

  sortByPop = (e) => {
    console.log("Sort by pop clicked");
    //
    const sortedByPop = [...this.state.starsFromContacts].sort((a, b) => {
      return b.popularity - a.popularity;
    });
    //
    this.setState({
      starsFromContacts: sortedByPop,
    });
  };

  // --- iteration 4 ---
  deleteOneStar = (id) => {
    const deleted = this.state.starsFromContacts.filter((one) => one.id !== id);

    this.setState({
      starsFromContacts: deleted,
    });
  };

  render() {
    // --- iteration 1 ---
    const StarlistInit = this.state.starsFromContacts.map((oneStar) => (
      <tr key={oneStar.id}>
        <td>
          <img src={oneStar.pictureUrl} alt="" />
        </td>{" "}
        <td> {oneStar.name} </td> <td> {oneStar.popularity.toFixed(2)} </td>{" "}
        <td>
          <button onClick={() => this.deleteOneStar(oneStar.id)}>Delete</button>
        </td>{" "}
      </tr>
      
    ));

    console.log(this.state.starsFromContacts);

    return (
      <div className="starTable">
        <div className="panel">
          <button onClick={this.sortByName} className="btnRight">Sort by name</button>{" "}
          <button onClick={this.randomAdd} className="btnCenter">?</button>{" "}
          <button onClick={this.sortByPop} className="btnLeft">Sort by popularity</button>{" "}
        </div>
        <table className="tableau">
          <thead>
            {" "}
            <tr>
              {" "}
              <td> Picture </td> <td> Name </td> <td> Popularity </td>{" "}
              <td> Action </td>{" "}
            </tr>{" "}
          </thead>{" "}
          <tbody> {StarlistInit} </tbody>{" "}
        </table>{" "}
      </div>
    );
  }
}

export default App;
