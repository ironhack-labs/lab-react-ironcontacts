import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';

class App extends Component {
  state = {
    movies: contacts.slice(0,5),
  };

  addRandomContact = () => {
    let randomMovie = contacts[Math.floor(Math.random()*contacts.length)];

    this.setState({
      movies: [...this.state.movies, randomMovie],
    });
  };

  sortByPopularity = () => {
    let moviesCopy = [...this.state.movies];

    let sortedMovies = moviesCopy.sort(function(a,b) {
      return b.popularity - a.popularity;
    });
    this.setState({
      movies: sortedMovies,
    })

  };

  sortByName = () => {
    let moviesCopy = [...this.state.movies];

    let sortedMovies = moviesCopy.sort(function(a,b) {
      
      if(a.name < b.name){
        return -1;
      }

      if(a.name > b.name){
        return 1;
      }

      return 0;
    });
    this.setState({
      movies: sortedMovies,
    })
  };

  deleteMovie = (movie) => {
    const moviesCopy = [...this.state.movies];
    let deletedMovies = moviesCopy.filter((data) => {
      return data.id != movie;
    })
    this.setState({
      movies: deletedMovies
    })
  };

  render(){
  
  const TableMovie = (props) => {
    return(
      <tr>
        <td>
          <img className="imagen" src={props.pictureUrl} />
        </td>
        <td>
          <h3> {props.name}</h3>
        </td>
        <td>
          <p> {props.popularity} </p>
        </td>
        <td>
          <button onClick={() => this.deleteMovie(props.movieID)}> Delete </button>
        </td>
      </tr>
    )
  };

  const allMovies = this.state.movies.map(function(movie) {
    const popularity = Number.parseFloat(movie.popularity).toFixed(2);
  
    return(
      <TableMovie key={movie.id}
        movieID={movie.id}
        pictureUrl = {movie.pictureUrl}
        name = {movie.name} 
        popularity = {popularity}
      />
    );
});
    

   
  return (
    <div className="App">
      <h1> IronContacts </h1>
      <div>
      <button onClick={() => this.addRandomContact()}>
          {"Add Random Contact"}
      </button>
      <button onClick={() => this.sortByName()}>
          {"Sort By Name"}
      </button>
      <button onClick={() => this.sortByPopularity()}>
          {"Sort by Popularity"}
      </button>
      </div>
      <table className="tabla">
        <thead>
        <tr className="titulo">
          <th> Picture </th>
          <th> Name </th>
          <th> Popularity </th>
          <th> Action </th>
        </tr>
      </thead>
      <tbody>
        {allMovies}
      </tbody>
      </table>     
    </div>
  );
  }
}

export default App;
