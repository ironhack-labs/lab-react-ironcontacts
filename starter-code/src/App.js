import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json'
import Artists from './components/Artists.js'
import TableBody from './components/TableBody';
import TableHead from './components/TableHead';


class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      artistArray: this.fiveArtist(),
    }
    this.clickHandlerRandomContacts = this.clickHandlerRandomContacts.bind(this);
    this.clickHandlerSortName = this.clickHandlerSortName.bind(this);
    this.clickHandlerSortPop = this.clickHandlerSortPop.bind(this);
    this.clickHandlerDelete = this.clickHandlerDelete.bind(this);


  }

  fiveArtist() { //Accessing the 5 first contacts from contacts array
    const fiveArtistArray = [];
    for(let i = 0; i < 5; i += 1){
      fiveArtistArray.push(contacts[i])
    }
    console.log(fiveArtistArray)
    return fiveArtistArray;
  }

  randomContact(){ //Select a random contact from contacts array
    return contacts[Math.floor(Math.random() * contacts.length + 1)];
  }

  clickHandlerRandomContacts(){
    const artistArrayCopy = [...this.state.artistArray];
    artistArrayCopy.unshift(this.randomContact())
    this.setState({
      artistArray: artistArrayCopy
    })
  }

  clickHandlerSortName(){
    const sortedArr = [...this.state.artistArray];
    sortedArr.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });

    this.setState({
      artistArray: sortedArr,
    });
  }

  clickHandlerSortPop(){
    const sortedArr = [...this.state.artistArray];
    sortedArr.sort((a, b) => b.popularity - a.popularity)
    this.setState({
      artistArray: sortedArr,
    });
  }

  clickHandlerDelete(idx){
   const copyArr = [...this.state.artistArray]
   copyArr.splice(idx, 1)
   this.setState({
    artistArray: copyArr,
   }) 
  }

  render()  {
    return (
      <div className="container">
      <h2>IronContacts</h2>
      <button onClick={this.clickHandlerRandomContacts}>Add Random Contact</button>
      <button onClick={this.clickHandlerSortName}>Sort by name</button>
      <button onClick={this.clickHandlerSortPop}>Sort by Popularity</button>
        <Artists artistArray={this.state.artistArray} clickToDelete={this.clickHandlerDelete} />
      </div>
    );
  }
}

export default App;
