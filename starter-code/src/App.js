import React from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from "./contacts.json";
import Card from "./Card";


class App extends React.Component {
  constructor() {
    super();
    this.famousPeople = contacts.map((elem,idx) => {
      return {
        key: idx,
        name: elem.name,
        pic: elem.pictureUrl,
        pop: elem.popularity
      }
    });
    this.state = {
      conts:[...this.famousPeople].slice(0,5)  
    };
  }
  addRndConts() {
    let newConts = [...this.state.conts]
    let newFamous = Math.floor(Math.random() * this.famousPeople.length)
  
    newConts.push(this.famousPeople[newFamous])
    this.setState({
      ...
      this.state = {
        conts: newConts
      } 
    })
  }
  compareNames(a,b){
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    let comp = 0;

    if (nameA > nameB){
      comp = 1;
    }
    else {
      comp = -1;
    }
    return comp;
  }

  comparePop(a,b){
    const popA = a.pop;
    const popB = b.pop;

    let comp = 0;

    if (popA < popB){
      comp = 1;
    }
    else {
      comp = -1;
    }
    return comp;
  }

  // const [ item,  ...rest ] = arr
  // arr = rest

  sortByName(){
    let newSortName = this.state.conts.sort(this.compareNames);
    this.setState({
      ...
      this.state = {
        conts: newSortName
      } 
    })
  }
  sortByPop(){
    let newSortPop = this.state.conts.sort(this.comparePop);
    this.setState({
      ...
      this.state = {
        conts: newSortPop
      } 
    })
  }
  deleteCardById(idx) {
    let newConts = this.state.conts
    newConts.splice(idx,1)
    this.setState({
      ...
      this.state = {
        conts: newConts 
      }
    })
  }
  render() {
    let cardSend = this.state.conts.map((elem,idx) => {
      return (
        <div>
          <Card key={idx} data={elem}  />
          <button onClick={() => this.deleteCardById(idx)}>delete</button>
        </div>
        )
    })
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>IronContacts</h1>
        <h3>Picture Name Popularity</h3>
        <button onClick={() => this.addRndConts()}>Add Random Contact</button>
        <button onClick={() => this.sortByName()}>Sort By Name</button>
        <button onClick={() => this.sortByPop()}>Sort By Popularity</button>
        {cardSend}
      </div>
    );
  }
}

export default App;
