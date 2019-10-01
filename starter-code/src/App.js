import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';



function compare( a, b ) {
  if ( a.name < b.name ){
    return -1;
  }
  if ( a.name > b.name ){
    return 1;
  }
  return 0;
}

function compared( a, b ) {
  if ( a.popularity < b.popularity ){
    return -1;
  }
  if ( a.popularity > b.popularity ){
    return 1;
  }
  return 0;
}

class App extends Component {


  state = {
    actors : contacts.splice(0,5),
    actorsLeft: contacts
  }


  showListOfActors = () => {
    console.log(this.state.actors)
    let listOfActors = this.state.actors.map((eachActor,i)=> {
      console.log(eachActor.name)
      return <tr key={i} >
        <td><img width="100px" src={eachActor.pictureUrl}></img></td>
        <td>{eachActor.name}</td>
        <td>{eachActor.popularity}</td>
        <button onClick={()=>this.deleteActor(i)}>Delete {i}</button>
      </tr>
    })
    return listOfActors
}

  getRandomActor = () => {
    
     
      let allActors = [...this.state.actors]
      let randomIndex = Math.floor(Math.random()*(allActors.length))
      allActors.push(this.state.actorsLeft[randomIndex])

      let allContactList = [...this.state.actorsLeft]
      allContactList.splice(randomIndex,1)

      this.setState({
          actors: allActors,
          actorsLeft: allContactList
      })
  }




  sortByName = ()=>{
    this.setState({
      actors:[...this.state.actors].sort( compare )
    });

  }
  sortByPopularity = ()=>{
    this.setState({
      actors:[...this.state.actors].sort( compared )
    });

  }

  deleteActor =(index)=>{
    let actorList =[...this.state.actors]
    actorList.splice(index,1)
    this.setState({
      actors:actorList
    })
  }

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={this.getRandomActor} className="button">Add Random Actor</button>
        <button onClick={this.sortByName} className="button">Sort By Name</button>
        <button onClick={this.sortByPopularity} className="button">Sort By Popularity</button>
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


