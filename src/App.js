import './App.css';
import contacts from "./contacts.json";
import React from 'react'

let arrayOfFive = contacts.slice(0, 5);

class App extends React.Component {
  state = {
    Actors: arrayOfFive
  }

  addRandom = (props) => {
    const randomActor = contacts[Math.floor(Math.random() * contacts.length)]
    const ActorsCopy = [...this.state.Actors]
    this.setState(() => {
      return { Actors: [...ActorsCopy, randomActor] }
    })
  }

  sortByName = (props) => {
    const sortedNameArray = this.state.Actors.sort((a, b) => {
      return a.name.localeCompare(b.name)
    })
    this.setState({
      Actors: sortedNameArray
    })
  }

  sortByPop = (props) => {
    const sortedPopArray = this.state.Actors.sort((a, b) => {
      return b.popularity - a.popularity
    })
    this.setState({
      Actors: sortedPopArray
    })
  }

  delete = (id) => {
    const newArray = this.state.Actors.filter((item) => item.id !== id);
    this.setState((state) => {
      return { Actors: newArray }
    })
  }

  render() {
    const Actors = this.state.Actors.map(actor => {
      return (
        <tr key={ actor.id }>
          <td><img src={ actor.pictureUrl } alt="" /></td>
          <td>{ actor.name }</td>
          <td>{ actor.popularity.toFixed(2) }</td>
          <td><button onClick={ () => { this.delete(actor.id) } }>remove</button></td>
        </tr>
      )
    })
    return (
      <div className="container" >
        <h1>IronContacts</h1>
        <button onClick={ this.addRandom }>add random actor</button>
        <button onClick={ this.sortByName }>sort by name</button>
        <button onClick={ this.sortByPop }>sort by popularity</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            { Actors }
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
