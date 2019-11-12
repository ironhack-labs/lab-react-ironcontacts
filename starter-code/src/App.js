import React, { Component } from 'react';
import './App.css';
import actorGroup from '../src/contacts.json';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        list: actorGroup.slice(0,5), //first 5 actors
        otherActors: actorGroup.slice(5) //rest of actors
    }
}

showActor = () =>{
    return this.state.list.map((eachActor,i)=>{
        return(
          <tr className="card" key={i}>
            <td><img src={eachActor.pictureUrl} alt="Actor"/></td>
            <td>{eachActor.name}</td>
            <td>{eachActor.popularity}</td>
            <td><button onClick = {()=>{this.deleteActor(i)}}>Delete</button></td> 
        </tr>
        )
    })
}

addRandom = () =>{
  let othersCloneActor = [...this.state.otherActors]; //get other rest of the actors
  let rand = othersCloneActor.splice(Math.floor(Math.random()*othersCloneActor.length), 1)[0];
  console.log(rand);

  let clone = [...this.state.list]; //the current 5 actors

  if(rand) {
  clone.unshift(rand);
  }

  this.setState({list: clone, otherActors: othersCloneActor});
}

sortName = () =>{

  let sorting = [...this.state.list]; 

  sorting.sort(function(a, b) { 
    if(a.name < b.name) { return -1; }
    if(a.name > b.name) { return 1; }
    return 0;
  });

  this.setState({list: sorting});
}

sortPopularity = () =>{

  let sortingP = [...this.state.list]; 

  sortingP.sort((a, b) => b.popularity - a.popularity);

  this.setState({list: sortingP});
}
deleteActor = (theIndex) =>{
  let deleteList = [...this.state.list];
  // step 1 is to grab theinfo out of the state and clone it

  deleteList.splice(theIndex, 1);
  // step 2 is to do wahtever you want to do to that thing and you can do it in regular javascript

  this.setState({list: deleteList})
  // step 3 is to take that thing you edited and use it to set the state
}


  render() {
    // console.log(this.state);
    return (
      <div className="App">
      <h2>IronContacts</h2>
      <div className="menubar">
        <button onClick={this.addRandom}>Add Random Contact</button>
        <button onClick={this.sortName}>Sort by Name</button>
        <button onClick={this.sortPopularity}>Sort by Popularity</button>
      </div>
      <div className="actorTable">
      <table>
        <thead>
          <tr>
            <td>Picture</td>
            <td>Name</td>
            <td>Popularity</td>
          </tr>
        </thead>
        <tbody>
            {this.showActor()}
        </tbody>
        </table>
        </div>
      </div>
    );
  }
}

export default App;
