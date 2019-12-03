import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json'
import Table from './Table/Table';


class App extends Component {
  constructor(){
    super()
    this.contacts = [...contacts]
    this.fivecontacts = this.contacts.splice(0,5)
    this.state = {
      actors: this.fivecontacts
    }
  }

  randomActor(){
    let newContact = this.contacts.filter((contact) => !this.state.actors.includes(contact))
    this.state.actors.push(newContact[Math.floor(Math.random() * newContact.length)]);
    this.setState({
      ...this.state.actors
    })
  }

  sortByName(){
    this.state.actors.sort(function (a, b){
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  })
  this.setState({
    ...this.state.actors
  })
 };

 sortByPopularity(){
  this.state.actors.sort(function (a, b){
  if (a.popularity > b.popularity) {
    return 1;
  }
  if (a.popularity < b.popularity) {
    return -1;
  }
  return 0;
})

this.setState({
  ...this.state.actors
})
};

deleteActor(){
  alert("nope")

  this.setState({
    ...this.state.actors
  })
}


  render() {
    return (
      <div className="app">
        <h1>IronContacts</h1>
        <table className = "table">
          <button class="button" onClick={() => this.randomActor()}>Add Random</button>
          <button class="button" onClick={() => this.sortByName()}>Sort by Name</button>
          <button class="button" onClick={() => this.sortByPopularity()} >Sort by Popularity</button>
          <tbody>
          <tr id = "first-line">
            <th> Picture</th>
            <th> Name </th>
            <th> Popularity </th>
          </tr>

          {this.state.actors.map((actor, i) => (<Table key={i} image={actor.pictureUrl} name={actor.name} popularity={actor.popularity} ></Table>))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
