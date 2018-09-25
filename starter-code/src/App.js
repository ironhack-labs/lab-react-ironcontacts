import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json'
import Card from './Card.js'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      contacts: contacts.slice(0,5)
    }
  }



  showMovieCards(){
    return this.state.contacts.map((contact, index)=>{
      return (
          <Card 
          key={ index }
          pictureUrl={contact.pictureUrl}
          name={contact.name}
          popularity={contact.popularity}
          deleteClickHandler = {()=>this.deleteMovie(index)}
          />
    
       )
    })
  }

happensWhenClick() {

  const toAdd = contacts[Math.floor(Math.random() * contacts.length + 4)];

  const addTalent = [...this.state.contacts]
 
  addTalent.push(toAdd)

  this.setState({
    contacts: addTalent
  })

}

sortByName(arr) {
  
  var sortedArray = this.state.contacts.sort( (a, b) => {
    if (a.name < b.name) return -1;
    else if (a.name > b.name) return 1;
    return 0;
  });


this.setState({
  contacts: sortedArray
})

}


sortByPopularity() {

  var sortedArrayPop = this.state.contacts.sort( (a, b) => {
    if (a.popularity > b.popularity) return -1;
    else if (a.popularity < b.popularity) return 1;
    return 0;
  });

this.setState({
  contacts: sortedArrayPop
})

}



deleteMovie(whichMovieToDelete){
  const daMovies = [...this.state.movies];
  daMovies.splice(whichMovieToDelete, 1)

  this.setState({
      movies: daMovies
  })

}




  render() {
    return (
      <div className="App">
       <h1>IronContacts</h1>
<div className="random-contact">
<button onClick= {()=> this.happensWhenClick()}>Add Random Contact</button>
<button onClick= {()=> this.sortByName()}>Sort by name</button>
<button onClick={()=> this.sortByPopularity()}>Sort by popularity</button>
</div>
       <div className="container">
       <div className="row second-fix">
         <h2>Picture</h2>
         <h2>Name</h2>
         <h2>Popularity</h2>  
       </div>
       </div>
<div>
      {this.showMovieCards()}
      {/* {this.pictureUrl} */}


</div>

      </div>
    );
  }
}

export default App;
