import React, { Component } from 'react';
// import logo from './logo.svg';
import actors from "./contacts.json";
import Contacts from './components/Contacts';
import Header from './components/Header';
import './App.css';

const constActors = [...actors];

class App extends Component {
    state = {
        constActors,
        actors: [...constActors].slice(0, 5)
      };
    
      addRandomContact = (e) => {
        const { actors, constActors } = this.state;
        const currentActorsIds = [...actors].map(actor => actor.id);
        const restActors = [...constActors].filter(actor => !currentActorsIds.includes(actor.id));
        let randomActor = restActors[Math.floor(Math.random() * restActors.length)];
        console.log(randomActor);
        const copyActors = [...actors, randomActor];
        this.setState({actors: copyActors})
      }

      sortbyPopularity = e => {
        const { actors } = this.state;
        const sortActors = [...actors].sort((a,b) => a.popularity > b.popularity ? -1 : a.popularity < b.popularity ? 1 : 0);
        this.setState({actors: sortActors})
      }

      sortByName = (e) => {
        const { actors } = this.state;
        const sortedActors = [...actors].sort((a,b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0);
        this.setState({
          actors: sortedActors
        })
      }
    
    
    render() {
      const { actors } = this.state;
        return (
      <div>
        <Header addRandomContact={this.addRandomContact} sortByPopularity={this.sortbyPopularity} sortByName={this.sortByName} />
        <Contacts actors={actors}  />
      </div>
      );
}
}

export default App;