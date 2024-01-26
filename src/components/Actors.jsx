import actorsData from "../contacts.json";
import { useState } from "react";
const Actors = () => {
  const [allActors, setAllActors] = useState(actorsData.slice(6));
  const [actors, setActors] = useState(actorsData.slice(0, 6));
  return (
    <div>
      {actors.map((actor) => (
        <div key={actor.id}>
          <h1>Picture</h1>
          <img
            src={actor.pictureUrl}
            className="card-img-top"
            alt="{actor.name}"
          />
          <div className="card-body">
            <h5 className="card-title">{actor.name}</h5>
            <p className="card-text">{actor.popularity}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Actors;
