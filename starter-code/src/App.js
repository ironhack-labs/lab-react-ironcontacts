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

  render() {
    return (
      <div className="App">   
      <button onClick={this.randomContact}>Add Random Contact</button>
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
