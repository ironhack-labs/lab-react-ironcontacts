import React, { Component } from 'react';
import contacts from './contacts.json';
import Row from './row';
import './App.css';

class App extends Component {

constructor(){
    super()
    this.availableContacts = [...contacts]
    this.contactsIni = contacts.splice(0,5)
    this.state = {
      actors: this.contactsIni
    }

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
      <div className="App">
        <h1>IronContacts</h1>
        <button className="btn" onClick={ () => this.addRandom()}>Add Random Contact</button>
        <button className="btn" onClick={ () => this.sortName()}>Sort by name</button>
        <button className="btn" onClick={ () => this.sortPopularity()}>Sort by popularity</button>
        <table className="table">
          <tbody>
            <tr>
              <th>Picture</th>
              <th>Name</th> 
              <th>Popularity</th>
              <th>Action</th>
            </tr>
              {this.state.actors.map((feature,idx) => <Row name={feature.name} image={feature.pictureUrl} popularity={feature.popularity} key={idx} ind={idx} deletebtn={this.delete}></Row>)}
        </tbody>
        </table>
      </div>
    );
  }
}

export default App;
