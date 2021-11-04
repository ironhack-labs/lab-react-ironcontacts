import './App.css';
import contacts from "./contacts.json";
import React from "react";

const initialContacts = contacts.slice(0,5)

// console.log(initialContacts)
class Actors extends React.Component {
   render() {
    return (
          <tr>
           <td><img src={this.props.pictureUrl} alt="" /></td>
           <td>{this.props.name}</td>
           <td>{this.props.popularity}</td>
         </tr>
    )
  }
}

function getActorRandomly(){
  return contacts[Math.floor(Math.random()*contacts.length)]
}
// console.log(getRandomActor(contacts))

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialActors: initialContacts
    };
  }

  randomActor = () => {
    this.setState((prevState) => {
      let actorRandom = getActorRandomly();
      const newListActors = [...prevState.initialActors, actorRandom]
      return {initialActors: newListActors}
    })    
  }
  
  render() {
    return (
      <div className="container">
        <div className="table">
          <h1>IronContacts</h1>
          <button onClick={this.randomActor}>Add Random Contact</button>
          <button onClick={this.sortName}>sort the table by name</button>
          <button >sort by popularity</button>
          <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>

          <tbody>
            {this.state.initialActors.map((actor) => {
              return <Actors key={actor.id} {...actor} />
            })}
          </tbody>
        </table>
        </div>
      </div>


    )

  }

}

export default App;
