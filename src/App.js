import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';

class App extends Component {
  state = {
    movies: contacts.slice(0,5),
  };

  addRandom = () => {

    let randomMovie 
    let inList = true;
      while(inList){
        randomMovie = contacts[Math.floor(Math.random() * contacts.length)];
        inList = false;
        this.state.movies.forEach(e => {
          if(e.name === randomMovie.name) {
            inList = true;
          }
        });
      }
      this.setState({
            movies: [...this.state.movies, randomMovie]
      });
    }

    sortByName= () => {
      let moviesCopy = [...this.state.movies];
      let sortedMovies = moviesCopy.sort(function(a, b) {
        return (a.name > b.name) ? 1 : -1
        // moviesCopy.sort((a, b) => a.firstname.localeCompare(b.firstname))
        // if (a.name < b.name) {
        //   return -1;
        // }
        // if (a.name>b.name) {
        //   return 1;
        // }
        // // a must be equal to b
        // return 0;
      });
      this.setState({
        movies: sortedMovies
      })
    };

    sortByPopularity = () => {
      let moviesCopy = [...this.state.movies];
      let sortedMovies = moviesCopy.sort(function(a, b) {
        return b.popularity - a.popularity;
      });
      this.setState({
        movies: sortedMovies
      })
    };

    deleteMovieHandler = (movieIndex) => {
      // const moviesCopy = [...this.state.movies]; 
      // moviesCopy.splice(movieIndex, 1);

      const filtered = this.state.movies.filter(movie => movie.id !== movieIndex)
      this.setState({
        movies: filtered,
      });
    };

  render() {
    const TableRow = (props) => {
      return (
        <tr>
          <td>
            <img className="img_list" src={props.pictureUrl} width="200" height="200"/>
          </td>
          <td>
            <h3>{props.name}</h3>
          </td>
          <td>
            <p>{props.popularity}</p>
          </td>
          <td>
            <button onClick={() => this.deleteMovieHandler(props.movieId)}>Delete</button>
          </td>
        </tr>
      );
    };
    const allMovies = this.state.movies.map(function (movie) {
    const popularity = Number.parseFloat(movie.popularity).toFixed(2);


      return (
        
        <TableRow
          key={movie.id}
          movieId={movie.id}
          pictureUrl={movie.pictureUrl}
          name={movie.name}
          popularity={popularity}
        />
      );
      })

    return (
      <div>
        <h1>IRON CONTACTS</h1>
        <button onClick={this.addRandom}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPopularity}>Sort by popularity</button>

        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{allMovies}</tbody>
        </table>
      </div>
    );
  }
}

export default App;