import React, { Component } from 'react';
import Contacts from '../contacts.json'; 

import './App.css';
import {Actors} from './actors';

//console.log(Contacts)

class App extends Component {
  constructor() {
    super();


    this.state = {
      actors: Contacts.slice(0, 5)

    }
    
  }
 
  render() {

  return (
    
    <main>
      <div className="App">
        <h1>Iron Contacts</h1>

      <table>
         <tr>
            <td>Picture</td>
            <td>Name</td>
            <td>Popularity</td>
          </tr>
        <tbody>
         
            {this.state.actors.map((elm, id) =>
               (<Actors key={id} name={elm.name} pictureUrl={elm.pictureUrl} popularity={elm.popularity} />
                
            ))}

          </tbody>


      </table>
      </div>
      
    </main>
  );
}
}
export default App;
