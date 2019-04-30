import React, { Component } from 'react';
import contacts from './contacts.json'
import Actor from './components/actor/Actor'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      fistsActors : [...contacts].splice(0,5)
    }
  }

  addNewActor() {
    let allTheActors = [...contacts]
    let freeActor = allTheActors.filter(actor => this.state.fistsActors.map(c => c.name).indexOf(actor.name) < 0);
    let randomActor = freeActor[Math.floor(Math.random() * (freeActor.length))];
    this.state.fistsActors.push(randomActor)

    this.setState({
      ...this.state
    })
  }

  sortName() {
    this.state.fistsActors.sort((a,b) => {
      if(a.name < b.name) { return -1; }
      if(a.name > b.name) { return 1; }
      return 0;
    })

    this.setState({
      ...this.state
    })
  } 
  
  sortPopularity() {
    this.state.fistsActors.sort((a, b) => b.popularity - a.popularity);
  
    this.setState({
      ...this.state
    })
  } 

  deleteActor(actorName) {
    console.log(this.state)
    this.setState({
      ...this.state,
      fistsActors: this.state.fistsActors.filter(actor => actor.name !== actorName)
    })
  }

  render() {
    const ListActors =
      this.state.fistsActors.map((contacts,i) => {
      return (
        <React.Fragment key={i}>
          <Actor {...contacts} deleteActor = {() => this.deleteActor(contacts.name)} />
        </React.Fragment>
      )
    })
    return (
      <React.Fragment>
       <h1>IronContacts</h1>
       <button onClick={() => this.addNewActor()}>Add Random Contact</button>
       <button onClick={() => this.sortName()}>Sort by name</button>
       <button onClick={() => this.sortPopularity()}>Sort by popularity</button>
       <table className="table">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {ListActors}
          </tbody> 
        </table>
      </React.Fragment>
    );
  }
}

export default App;
