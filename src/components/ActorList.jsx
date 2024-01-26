import actorsData from "../contacts.json";
import { useState } from "react";

const Actors = () => {
  const [actors, setActors] = useState(actorsData.slice(0, 5));
  const onDelete = (actorId) => {
      setActors((prevActors) => prevActors.filter((actor) => actor.id !== actorId));
  };
  const addRandomContact = () => {
      const remainingActors = actorsData.filter(actor => !actors.includes(actor));
      const newActor = remainingActors[Math.floor(Math.random() * remainingActors.length)];
      setActors(prevActors => [...prevActors, newActor]);
  };
  const sortByName = () => {
      setActors(prevActors => {
          const sortedActors = prevActors.slice().sort((a, b) => a.name.localeCompare(b.name));
          return sortedActors;
      });
  };
  const sortByPopularity = () => {
      setActors(prevActors => {
          const popularActors = prevActors.slice();
          popularActors.sort((a, b) => b.popularity - a.popularity);
          return popularActors;
      });
  };
  return (
      <div>
          <button className="button-list" type="primary" onClick={addRandomContact}>Add Random Contact</button>
          <button className="button-list" type="primary" onClick={sortByPopularity}>Sort by popularity</button>
          <button className="button-list" type="primary" onClick={sortByName}>Sort by name</button>
          {actors.map((actor) => (
              <div key={actor.id}>
                <table className="table mt-3">
                  <thead>
                      <th scope="col">Picture</th>
                      <th scope="col">Name</th>
                      <th scope="col">Popularity</th>
                      <th scope="col">Won Oscar</th>
                      <th scope="col">Won Emmy</th>
                      <th scope="col">Actions</th>
                  </thead>

                  <tbody className="data">
                      <th scope="row"><img src={actor.pictureUrl} className="card-img-top" alt="{actor.name}" /></th>
                      <td className="card-title">{actor.name}</td>
                      <td className="card-text">{actor.popularity}</td>
                      <td className="card-text">{actor.wonOscar ? "🏆" : ""}</td>
                      <td className="card-text">{actor.wonEmmy ? "🌟" : ""}</td>
                      <td><button className="button-list" type="primary" onClick={() => onDelete(actor.id)}>Delete </button></td>
                  </tbody>
                </table>
              </div>
          ))}
      </div>
  );
};
export default Actors;






