import React, { Component } from 'react'
import MovieCard from './MovieCard'
import contacts from '../contacts.json';



class MovieList extends Component {
  render() {
    return (
      <div>
        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
          {
            {contacts.map((oneActor, index) =>
            <MovieCard key={oneActor.id} name={oneActor.name} picture={oneActor.pictureUrl} popularity={oneActor.popularity}/>
            )}
          }
        </table>
      </div>
    )
  }
}


export default MovieList;