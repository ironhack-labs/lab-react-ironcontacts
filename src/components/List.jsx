import actorsData from "../contacts.json";
import { useEffect, useState } from "react";

const List = () => {
  const [actors, setActor] = useState(actorsData.slice(0, 5));

  const sortAlphabetically = () => {
    const sortedAlphabeticallyUser = [...actors].sort((actor1, actor2) => {
      return actor1.name.localeCompare(actor2.name);
    });
    setActor(sortedAlphabeticallyUser);
  };
  const sortPopularity = () => {
    const sortedPopularityUser = [...actors].sort((actor1, actor2) => {
      return actor2.popularity - actor1.popularity;
    });
    setActor(sortedPopularityUser);
  };

  const addRandomActor = () => {
    const remainingActors = actorsData.filter(
      (actor) => !actors.includes(actor)
    );
    if (remainingActors.length === 0) return alert("No hay mas actores");

    const randomActor =
      remainingActors[Math.floor(Math.random() * remainingActors.length)];
    setActor([...actors, randomActor]);
  };

  const onDelete = (id) => {
    setActor(
      actors.filter((actor) => {
        return actor.id !== id;
      })
    );
  };
  return (
    <div>
      <h1>IronContacts</h1>{" "}
      <button onClick={sortAlphabetically}> Sort alphabetically</button>
      <button onClick={sortPopularity}> Sort popularity</button>
      <button onClick={addRandomActor}> Add random actor</button>
      <table className="table">
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Win Oscar</th>
            <th>Win Emy</th>
          </tr>
        </thead>
        <tbody>
          {actors.map((actor) => (
            <tr key={actor.id}>
              <td>
                <img src={actor.pictureUrl} alt={actor.name} />
              </td>
              <td>{actor.name}</td>
              <td>{actor.popularity.toFixed(2)}</td>
              <td>{actor.wonOscar && "🏆"}</td>
              <td>{actor.wonEmmy && "🌟"}</td>
              <td>
                <button onClick={() => onDelete(actor.id)}>🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
