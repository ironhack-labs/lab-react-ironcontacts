import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json'

import Card from './components/Card';

class App extends Component {
  constructor() {
    super()
    this.availableContacts = [...contacts]
    this.state = {
      actors: [...contacts].slice(0, 5)
    };
  }

addRandom(){
    const otherContacts = this.availableContacts.filter( ( contact ) => !this.state.actors.includes( contact ) );
    this.state.actors.push( otherContacts[Math.floor(Math.random()*otherContacts.length)])
      this.setState({
          ...this.state.actors
      })
  }

  sortName(){
    this.state.actors.sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
    this.setState(this.state);
  }

  sortPopularity(){
    this.state.actors.sort((a,b)=>b.popularity-a.popularity);
    this.setState(this.state);
  }

  delete = sectionIndex => {
    
    let allActors = [...this.state.actors]
    allActors.splice(sectionIndex, 1)
    this.setState({
      ...this.state,
      actors: allActors
    })
    
  }

  render() {
    return (
      <section className="ContactDisplayer">
        <div className="container1">
          <div className="container2">
         <div className="header">
         <h1>IronContacts</h1>
          <button className="btn" onClick={ () => this.addRandom()}>Add Random Contact</button>
          <button className="btn" onClick={ () => this.sortName()}>Sort by name</button>
          <button className="btn" onClick={ () => this.sortPopularity()}>Sort by popularity</button>
         </div>
        <table>
        <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
        </thead>
        <tbody>
        {this.state.actors.map((contact, idx) => (
          <Card
            actors={contact}
            key={idx}
            ind={idx}
            deletebtn={this.delete}
          />
        ))}
        </tbody>
        </table>
          </div>
        </div>
      </section>
    );
  }
}

export default App;
