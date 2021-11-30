import './App.css';
import React from 'react';
import contacts from "./contacts.json";

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      fiveContacts: contacts.slice(0, 5),
      restContacts: contacts.slice(5,contacts.length)
    }
  }

  addRandom() {
    let newContact = this.state.restContacts.splice(Math.floor(Math.random()*this.state.restContacts.length),1)[0]
    let fiveContacts = this.state.fiveContacts
    fiveContacts.push(newContact)

      this.setState({
      fiveContacts
    })

  }

  sortByName(){
    let {fiveContacts} = this.state
    let actorName = fiveContacts.sort((a,b) => {
     if (a.name > b.name) {
      return 1;
      }
      if (a.name < b.name) {
      return -1;
            }
       return 0;
        });

        this.setState({actorName})
       }

  sortByPopularity(){
    let {fiveContacts} = this.state
    let thePopularity = fiveContacts.sort((a,b) => {

      if (a.popularity > b.popularity) {
      return -1;
      }
      if (a.popularity < b.popularity) {
      return 1;
            }
       return 0;

    });
    this.setState({thePopularity})
  }

  delete(deleteId){
    let {fiveContacts} = this.state
    let deleteMovie = fiveContacts.filter(movie => movie.id !== deleteId)

    this.setState({ fiveContacts :deleteMovie})  
  }

  render() {
  return (
   <div className="App">
     <h1>IronContacts</h1>
     <button onClick = {() => this.addRandom()}>Add Random Contact</button>
     <button onClick = {() => this.sortByName()}>Sort By Name</button>
     <button onClick = {() => this.sortByPopularity()}>Sort By Popularity</button>
     
   <table>
  <thead>
   <tr>
    <th>Picture</th>
    <th>Name</th>
    <th>Popularity</th>
    </tr>
  </thead>
  <tbody>

  {this.state.fiveContacts.map(actor =>{
    return (

  <tr>
    <td><img src={actor.pictureUrl}></img></td>
    <td>{actor.name}</td>
    <td>{actor.popularity.toFixed(2)}</td>
    <button onClick = {() => this.delete(actor.id)}>Delete</button>
  </tr>
    )
  }
  )
  }
  </tbody>
     </table>

   </div>
  )
}
}

export default App;
