import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json'
import Tabla from './components/Tabla'



class App extends Component {
  constructor(){
    super()
    this.contactsIni= contacts.splice(0,5)
    
    this.state = {
      actors : this.contactsIni
    }
  }
    
    addRandom () {
      let contactsActors = [...contacts].filter(
        actor=> this.state.actors
        .map( celeb => celeb.name)
        .indexOf(actor.name) === -1
      );

      let randomActor = contactsActors[Math.floor(Math.random()*contactsActors.length)]
      this.state.actors.push(randomActor)

      this.setState({
        ...this.state

      })
    }

    sortName(){
       this.state.actors.sort(function(a,b){
        if( a.name > b.name){
          return 1
        }
        if (a.name < b.name){
          return -1
        }else {
          return 0
        }
      })
      this.setState(this.state)
    }

    sorPopularity(){
      this.state.actors.sort((a,b)=>b.popularity-a.popularity)
      this.setState(this.state)
    }

    deleteActor = actorDelete => {

      let allactors = [...this.state.actors]
      allactors.splice(actorDelete,1)

      this.setState({
        ...this.state,
        actors: allactors
      })

    }


  
  render() {
    return (
      <div className="App">
        <h1>IRONHACKS</h1>
        <div>
        <button className="btn" onClick ={ () => this.addRandom()} >Add Randon Contac</button>
        <button className="btn" onClick ={ () => this.sortName()} >Sort By Name</button>
        <button className="btn" onClick ={ () => this.sorPopularity()} >Sort By Popularity</button>
        </div>
          <table className="tabla">
            <tbody>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>

          </tr>
                
             {
               this.state.actors.map((celeb,idx) => 
             <Tabla image= {celeb.pictureUrl} name= {celeb.name} popularity={celeb.popularity} key = {idx} idx={idx} deleteActor={this.deleteActor} ></Tabla>
            )}
                
            </tbody> 
            </table>
      </div>
    );
  }
}

export default App;
