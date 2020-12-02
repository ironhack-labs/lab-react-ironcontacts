import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';

class App extends Component {
  state = {
    actors: contacts.slice(0, 5),
  }

  addRandomMovie = () =>{
    const randomMovie = contacts[Math.floor(Math.random()*contacts.length)]
    console.log("randomMovie", randomMovie);
    this.setState({actors: [...this.state.actors, randomMovie]})
  }

  sortAlphabetically = () =>{
    console.log("this.setState.actors", this.state.actors);
    let alphabeticallyActors =  contacts.sort((a,b) => a.name.localeCompare(b.name));
    this.setState({actors: alphabeticallyActors})
  }

  sortDesc = () => {
    let descendingOrder = contacts.sort((a,b) => { 
      return  
    })
    this.setState({contacts: descendingOrder})
  }


  render() {
    return (
      <div>
        <h1>IronContacts</h1>
        <button onClick={this.addRandomMovie}>Add Random Contact</button>
        <button onClick={this.sortAlphabetically}>Sort by name</button>
        <button onClick={this.sortDesc}>Sort by popularity</button>

        <div>
          <table>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
            {this.state.actors.map((actor, index, array) => {
              return (
                <tr key={contacts.id}>
                  <td>
                    <img src={actor.pictureUrl} />
                  </td>
                  <td>{actor.name}</td>
                  <td>{actor.popularity}</td>
                  <button>Delete</button>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    );
  }
}

export default App;
