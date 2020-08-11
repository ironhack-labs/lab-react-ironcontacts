import React, {useState} from 'react'
import MovieCard from './MovieCard'
import contacts from '../contacts.json';



const MovieList = (props) => {
  const [actors, setActors] = useState(contacts.filter((actor, index) => index < 5)); 
  

  const randomMovieHandler = () => {
    const random = Math.floor(Math.random()* contacts.length);
     setActors([...actors, contacts[random]])
   };

  const sortByName = () => {
      const listToSort = contacts.name;
      const sorted = listToSort.sort();
    setActors(sorted)
  };

  const sortByPopularity = () => {}

  const deleteActorHandler = (actorID) => {
    const filtered = actors.filter(actor => actor.id !== actorID);
    setActors({actors: filtered});
   };
   
  return (
    <div className="MovieList">
    <button onClick={() => randomMovieHandler()}>Add Random contact</button>
    <button onClick={() => sortByName()}>Sort by name</button>
    <button onClick={() => sortByPopularity()}>Add Random contact</button>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
        {
          actors.map((oneMovie, index) => 
            <MovieCard key={oneMovie.id} picture={oneMovie.pictureUrl} name={oneMovie.name} popularity={oneMovie.popularity} clickToDelete={() => deleteActorHandler(oneMovie.id)} />
          )
        } 
      </table>
    </div>
  )
}


export default MovieList;