import React, { Component } from "react";
import "./MovieList.css";

class MovieList extends Component {
  constructor(props) {
    super(props);

    // initial state for ONLY when you need state
    this.state = {
      movieArray: [
        { _id: "7g", title: "The Godfather", director: "Francis Coppola" },
        { _id: "8h", title: "Star Wars", director: "George Lucas" },
        {
          _id: "9i",
          title: "The Shawshank Redemption",
          director: "Frank Darabont"
        }
      ]
    };
  }

  deleteMovie(index) {
    // update the array
    const movies = this.state.movieArray;
    movies.splice(index, 1);

    // setState({ animalArray: animals })
    this.setState({ movieArray: movies });
  }

  render() {
    const { movieArray } = this.state;
    return (
      <section className="MovieList">
        <h2>Movie List Example</h2>
        <ul>
          {movieArray.map((oneMovie, index) => {
            return (
              <li key={oneMovie._id}>
                <h3>{oneMovie.title}</h3>
                <p>Directed by {oneMovie.director}</p>
                <button onClick={() => this.deleteMovie(index)}>Delete</button>
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}

export default MovieList;
