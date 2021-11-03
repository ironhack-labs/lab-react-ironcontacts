import './App.css';
import contacts from "./contacts.json";
import React from "react";

const initialContacts = contacts.slice(0,5)

// console.log(initialContacts)

function getActorRandomly(){
  return contacts[Math.floor(Math.random()*contacts.length)]
}
// console.log(getRandomActor(contacts))

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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialActors: initialContacts
    };
  }

  randomActor = () => {
    const newArr = this.state.initialActors;
    // console.log("this is newArr",newArr)
    let actorRandom = getActorRandomly();
    // console.log("this is actorRandom", actorRandom)
    this.setState((prevState, props)=>{
     return newArr.push(actorRandom)
    })
    
  }

  
  render() {
    return (
      <div className="container">
        <table className="table">
          <h1>IronContacts</h1>
          <button onClick={this.randomActor}>Add Random Contact</button>
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


    )

  }

}

export default App;
