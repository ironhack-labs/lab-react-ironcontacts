import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';



class App extends Component {
  // actors = contacts.splice(0,5);
  state = {
    actors : contacts.splice(0,5),
    actorsLeft: contacts
  }
  
  showListOfActors = () => {
    console.log(this.state.actors)
    let listOfActors = this.state.actors.map((eachActor,i)=> {
      console.log(eachActor.name)
      return <tr >
        <td><img width="100px" src={eachActor.pictureUrl}></img></td>
        <td>{eachActor.name}</td>
        <td>{eachActor.popularity}</td>
      </tr>
    })
    return listOfActors
}




getRandomActor = () => {
      let allActors = [...this.state.actors]
      let randomIndex = Math.floor(Math.random()*(allActors.length))
      allActors.push(contacts[randomIndex])
      
      this.setState({
          actors: allActors
      })
}






  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={this.getRandomActor} className="button">Add Random Actor</button>

        <table >
            <tr>
              <th>PICTURE</th>
              <th>NAME</th> 
              <th>POPULARITY</th>
           </tr>
           { this.showListOfActors()}
        </table>
        
      </div>
    );
  }
}

export default App;


