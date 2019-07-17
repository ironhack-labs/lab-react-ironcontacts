import React, { Component } from 'react'
import './App.css';
import ArtistList from './components/ArtistList'
import contacts from './contacts.json'

class App extends Component {
  state = {
    artists: contacts.slice(0,5)
  }
  addArtists =() =>{
    let  initialArtists =  [...this.state.artists]
   
    initialArtists.push(contacts[Math.floor(Math.random() * contacts.length)])
    this.setState({artists:initialArtists})

  }

  sortArtistsByName= () => {
    let  initialArtists =  [...this.state.artists]
    initialArtists.sort((a,b) => (a.name > b.name) ? 1 : ((b.name> a.name) ? -1 : 0))
    this.setState({artists:initialArtists})
  }
  sortArtistsByPopularity= () => {
    let  initialArtists =  [...this.state.artists]
    initialArtists.sort((a,b) => (a.popularity > b.popularity) ? 1 : ((b.popularity> a.popularity) ? -1 : 0))
    this.setState({artists:initialArtists})
  }

 deleteArtist= (id) => {
  let  initialArtists =  [...this.state.artists]
  initialArtists.splice(id, 1)
   this.setState({artists:initialArtists}) 
  }

  render() {
    return (
      <div className="App">
    
           <h1>IronContacts</h1>
      <button onClick={this.addArtists}>Add random contact</button>
      <button onClick={this.sortArtistsByName}>Sort by name</button>
      <button onClick={this.sortArtistsByPopularity}>Sort by popularity</button>
       <ArtistList deleteArtist={this.deleteArtist} artists={this.state.artists}/>
      
      </div>
    );
  }
}

export default App
