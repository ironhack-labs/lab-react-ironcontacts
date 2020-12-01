import React from 'react';
import './App.css';
import contacts from './contacts.json';


class App extends React.Component {
  state = {
    firstActors: contacts.slice(0, 4),
    remainingActors: contacts.slice(5)
  }

  chooseRandomActor = () => {
    const actors = this.state.remainingActors;
    let oneRandomActor = actors[Math.floor(Math.random() * actors.length)];
    this.setState({ firstActors: [...this.state.firstActors, oneRandomActor] });
  }

  sortByName = () => {

    const actors = [...this.state.firstActors].sort((a, b) => a.name.localeCompare(b.name))

    this.setState({ firstActors: actors });

  }
  sortByPopularity = () => {
    const actors = [...this.state.firstActors].sort((a, b) => b.popularity - a.popularity)
    this.setState({ firstActors: actors });

  }


  deleteActor = (actorId) => {
    const filteredActors = this.state.firstActors.filter((actor) => {
      if (actor.id !== actorId) {
        return true
      } else {
        return false
      }
    })
    this.setState({ firstActors: filteredActors })

  }

  render() {

    return (

      <div className="App">

        <h1>IronContacts</h1>

        <button onClick={this.chooseRandomActor}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort by Name</button>
        <button onClick={this.sortByPopularity}>Sort By Popularity</button>

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
            {this.state.firstActors.map((actor) => {
              return (
                <tr key={actor.id}>
                  <td><img src={actor.pictureUrl} /> </td>
                  <td>{actor.name}</td>
                  <td>{actor.popularity.toFixed(2)}</td>
                  <td><button onClick={() => { this.deleteActor(actor.id) }}>Delete</button></td>

                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}



export default App;
