import React, { Component } from "react";
import contactsJson from './contacts.json'
import ArtistId from './components/ArtistId'


//import RandomButton from "./components/RandomButton";


import "./App.css";


class App extends Component {
  constructor() {
    super();
    this.state = {
        firstContacts: contactsJson.slice(0,5)
    };
  }

  addRandom = () => {
    let artistCopy = [...this.state.firstContacts];
    let array = Math.floor(Math.random() * contactsJson.length);
    for (let i=0; i<artistCopy.length; i++){
      if(artistCopy[i] === contactsJson[array]){
        array = Math.floor(Math.random() * artistCopy.length);
        i = 0
      }
    }
    artistCopy.push(contactsJson[array])

    this.setState({
      
      firstContacts: artistCopy
    })
}

  sortByName = () => {
    let sorted = [...this.state.firstContacts]
    sorted.sort((a, b) => a.name.localeCompare(b.name))
    
    this.setState({
      firstContacts: sorted
    })
  }

  sortByPopularity = () => {
    let sorted = [...this.state.firstContacts]
    sorted.sort((a, b) => b.popularity - a.popularity)
    
    this.setState({
      firstContacts: sorted
    })
  }

  deleteButton = (pos) => {
    let sorted = [...this.state.firstContacts]
    sorted.splice(pos, 1)

    this.setState({
      firstContacts: sorted
    })
  }


  

  render() {
    return (
      <div className="App">
      <button onClick={this.addRandom}>Add Random Contact</button>
      <button onClick={this.sortByName}>Sort By Name</button>
      <button onClick={this.sortByPopularity}>Sort By Popularity</button>

      <table>
      <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
      </thead>  
      <tbody>
        {this.state.firstContacts.map((oneArtist, index) => (
            <ArtistId key={index} pictureUrl={oneArtist.pictureUrl} name={oneArtist.name} popularity={oneArtist.popularity} delete={()=>this.deleteButton(index)}/>
            ))}
      </tbody>  
        </table>
      </div>
    );
  }
}
export default App;