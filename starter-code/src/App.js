import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';
import Card from './components/Card.js'
 var array = contacts.slice(0,5);

class App extends Component {
  constructor() {
    super();
    this.state = {
        actors: array
    }
}
randomContact = () => {

  let newActors = [...this.state.actors]
  var newContact = contacts[(Math.floor(Math.random()*contacts.length)+1)];
  newActors.push(newContact);
  
  this.setState({
    ...this.state,
    actors: newActors
  })

}

sortName = () => {
  let sortedNames = [...this.state.actors]
  function compare(a,b) {
    if (a.name < b.name)
      return -1;
    if (a.name > b.name)
      return 1;
    return 0;
  }
  sortedNames.sort(compare);
  this.setState({
    ...this.state,
    actors: sortedNames
  })

}


sortPopularity = () => {
  let sortedPopularity = [...this.state.actors]
  function compare(a,b) {
    if (a.popularity < b.popularity)
      return -1;
    if (a.popularity > b.popularity)
      return 1;
    return 0;
  }
  sortedPopularity.sort(compare);
  this.setState({
    ...this.state,
    actors: sortedPopularity
  })

}

  render() {
    return (
      <div className="App">   
      <button onClick={this.randomContact}>Add Random Contact</button>
      <button onClick={this.sortName}>Sort by Name</button>
      <button onClick={this.sortPopularity}>Sort by Popularity</button>
   <table>
           <tr>
             <th>Picture</th>
             <th>Name</th>
             <th>Popularity</th>
           </tr>
       { this.state.actors.map((contact,index) => 
         <Card key={index} pictureUrl={contact.pictureUrl} name={contact.name} popularity={contact.popularity} />) 
      }
   </table>
    

      </div>
    );
  }
}

export default App;
