import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'
import PrintContacts from "./components/printContacts"
let counter = 1
let countername = 1

class App extends Component {

  constructor(){
    super()
    
    this.state = {
      listActors : contacts.splice(0,5)
    }
    
  }
  
  addRandom = () =>{
    const listActorsCopy = [...this.state.listActors]  
    listActorsCopy.push(contacts.splice(Math.floor(Math.random() * contacts.length), 1)[0]) 
    this.setState({listActors:listActorsCopy})
  }
  sortName = () => {
    const listActorsCopy = [...this.state.listActors]
    listActorsCopy.sort((a, b) => {
      if(a.name < b.name) {return -1}
      if(a.name > b.name) {return 1}
      return 0
    }) 
    if (countername % 2){
      countername++
      this.setState({ listActors: listActorsCopy })
    }else{
      countername++
      this.setState({ listActors: listActorsCopy.reverse() })
    }
  }
  sortPopularity = () => {
    
    const listActorsCopy = [...this.state.listActors]
    listActorsCopy.sort((a, b) => a.popularity - b.popularity)
    if(counter % 2){ 
      counter++
      this.setState({ listActors: listActorsCopy })
    }else{
      counter++
      this.setState({ listActors: listActorsCopy.reverse() })
    }
  }
  deleteActor = idx => {
    const listActorsCopy = [...this.state.listActors]
    listActorsCopy.splice(idx, 1)
    this.setState({
      listActors: listActorsCopy
    })
  }

render() {
  console.log(this.state.listActors[0].name)
  console.log(this.state.listActors)
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h2 className="App-intro">
          Iron Contacts
        </h2>
        <button onClick={()=>this.addRandom()}>Add Random Contact</button>
        <button onClick={() => this.sortName()}>Sort by Name</button>
        <button onClick={() => this.sortPopularity()}>Sort by Popularity</button>
        <ul className="actorList">
        <li >
          <p>Image</p>
          <p>Name</p>
          <p>Popularity</p>
          <p>Action</p>         
        </li>
        {
            this.state.listActors.map((actor, idx) => <PrintContacts {...actor} key={idx} removeActor={()=>this.deleteActor(idx)} />)
        }
        </ul>
        {/* <ul><PrintContacts {.map([..contact])} /></ul> */}
      </div>
    );
  }
}

export default App;
