import React, { Component } from 'react';
import './App.css';
import { spliceRandomElementFromArr, getArrCopy } from './Utils/Utils';
import { contacts } from './contacts.js';

/*
 TODO: decidi não me preocupar com componentes porque eu já estava apanhando MUITO do state.
 Quais componentes você criaria, sr. heitor?
*/

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      celebritiesArr: [],
    };

    for (let i = 1; i < 6; i += 1) {
      const celebrity = this.getCelebrityRow(contacts);
      this.state.celebritiesArr.push(celebrity);
    }

    this.RenderRows = this.RenderRows.bind(this);
    this.addRandomCelebrity = this.addRandomCelebrity.bind(this);
    this.removeRandomCelebrity = this.removeRandomCelebrity.bind(this);
    this.sortByName = this.sortByName.bind(this);
    this.sortByPopularity = this.sortByPopularity.bind(this);
  }

  addRandomCelebrity() {
    console.log(this.state.celebritiesArr)
    const celebrity = this.getCelebrityRow(contacts);
    const newArr = getArrCopy(this.state.celebritiesArr);
    newArr.push(celebrity);
    this.setState({
      celebritiesArr: newArr,
    });
  }

  sortByName() {
    const newArr = getArrCopy(this.state.celebritiesArr);
    newArr.sort((a, b) => {
      const { name: nameA } = a;
      const { name: nameB } = b;
      return nameA.localeCompare(nameB);
    });
    this.setState({
      celebritiesArr: newArr,
    });
  }

  sortByPopularity() {
    const newArr = getArrCopy(this.state.celebritiesArr);
    newArr.sort((a, b) => {
      const { popularity: popA } = a;
      const { popularity: popB } = b;
      return Number(popB) - Number(popA);
    });
    this.setState({
      celebritiesArr: newArr,
    });
  }

  removeRandomCelebrity() {
    const newArr = getArrCopy(this.state.celebritiesArr);
    const removedElement = spliceRandomElementFromArr(newArr);
    // return celebrity to pool
    contacts.push(removedElement);
    this.setState({
      celebritiesArr: newArr,
    });
  }

  getCelebrityRow(arr) {
    return spliceRandomElementFromArr(arr);
  }

  RenderRows() {
    return this.state.celebritiesArr.map((e, i) => {
      const { name, pictureUrl, popularity } = e; // TODO: Eu não entendo porque esse elemento e os outros elementos e[0] são um array de arrays.
      const RoundedPop = Math.round(Number(popularity) * 100) / 100;
      return (
        <tr key={`r-${i}`}>
          <td>
            <img src={pictureUrl} alt={name} />
          </td>
          <td className="name">{name}</td>
          <td className="tabNum">{RoundedPop}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <>
        <h1 className="center">Iron Celebrities</h1>
        <button className="center" onClick={this.addRandomCelebrity}>
          add random celebrity
        </button>
        <button className="center" onClick={this.removeRandomCelebrity}>
          remove random celebrity
        </button>
        <button className="center" onClick={this.sortByName}>
          sortByName
        </button>
        <button className="center" onClick={this.sortByPopularity}>
          sort by popularity
        </button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            <this.RenderRows />
          </tbody>
        </table>
      </>
    );
  }
}

export default App;
