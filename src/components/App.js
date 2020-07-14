import React, { Component } from 'react';

import './App.css';
import Contacts from './../contacts.json';
import {Actors} from './actors/actors';

class App extends Component {
  constructor() {
    super();


    this.state = {
      actors: Contacts.slice(0, 5)

    }
    
  }

  myRandom = () => {
    const randomNum = Math.floor(Math.random()* Contacts.length - 1)
    const position = Contacts[randomNum]
    const copy =[...this.state.actors]

    copy.push(position)
    this.setState({actors:copy})

  }

  sortByName = () =>{
    const copyActors =[...this.state.actors]

    copyActors.sort((a,b) => {
    return a.name.localeCompare(b.name)
     
    })

    this.setState({actors:copyActors})
    
  }

  sortByPopularity = () =>{
    const copyActors2 =[...this.state.actors]

    copyActors2.sort((a,b) => b.popularity - a.popularity

    )

    this.setState({actors:copyActors2})
    
  }

  deleteContact = id => {
    const copyActors3 = [...this.state.actors]
    copyActors3.splice(id, 1) 
    
    
    this.setState({ actors: copyActors3 }) 

}

  render() {

    return (
      <section>
        <h1>Iron Contacts</h1>
        <button onClick={this.myRandom}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPopularity}>Sort by popularity</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
         
            {this.state.actors.map((elm, id) =>
               (<Actors key={id} name={elm.name} pictureUrl={elm.pictureUrl} popularity={elm.popularity} deleteActor ={this.deleteContact}/>
                
            ))}

          </tbody>
        </table>
      </section>
    )
  }
}

export default App;
