import './App.css';
import contacts from "./contacts.json";
import React from "react";
import AddActor from './AddActor';





const initialContacts = contacts.slice(0,5)
// console.log(initialContacts)
function getActorRandomly(){
  return contacts[Math.floor(Math.random()*contacts.length)]
}
// console.log(getRandomActor(contacts))


class Actor extends React.Component {
   render() {
    return (
          <tr>
           <td><img src={this.props.pictureUrl} alt="" /></td>
           <td>{this.props.name}</td>
           <td>{this.props.popularity}</td>
           <td><button onClick={this.props.clickToDelete}>Delete Autor</button></td>
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
    this.setState((prevState) => {
      let actorRandom = getActorRandomly();
      const newListActors = [...prevState.initialActors, actorRandom]
      // console.log(newListActors)
      return {initialActors: newListActors}
    })
  }

  sortName = () => {

    this.setState((prevState, props) => {
      const objectOfNames = prevState.initialActors.sort((a,b) => {
        return a.name.localeCompare(b.name)
        
      });
      return {initialActors: objectOfNames}
      
    })
  }
  
  sortByPopularity = () => {
    this.setState((prevState, props) => {
      const popularityList = prevState.initialActors.sort((a, b) => {
        return a.popularity- b.popularity
      });
      return {initialActors: popularityList}
    })
  }

  deleteContact = (id) =>{
    const initialActorsCopy = [...this.state.initialActors]
    const initialContactsIndex = initialActorsCopy.findIndex(actor=> actor.id === id);
    initialActorsCopy.splice(initialContactsIndex,1);
    this.setState (
      {initialActors : initialActorsCopy}
      )

  }

  createActor = (newActorDetails) => {
    this.setState((prevState, props) => {
      const newActor = [...prevState.initialActors, newActorDetails]
      return{initialActors: newActor}

    })

  }

  render() {
    return (
      <div className="container">
        <div className="table">
          <h1>IronContacts</h1>
          <button onClick={this.randomActor}>Add Random Contact</button>
          <button onClick={this.sortName}>Sort the table by name</button>
          <button onClick={this.sortByPopularity}>sort by popularity</button>

          <AddActor addActorHandler = {this.createActor}/>




          <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>

          <tbody>
            {this.state.initialActors.map((actor) => {
              // console.log({...actor})
              return <Actor key={actor.id} {...actor} clickToDelete={() => this.deleteContact(actor.id) } 
              />
            })}
          </tbody>
        </table>
        </div>
      </div>


    )

  }

}

export default App;
