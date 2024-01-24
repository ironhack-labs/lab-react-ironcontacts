import actorsData from "../../contacts.json";
import { useState } from "react";
import './ActorList.css'
import Button from '../Button'

const Actors = () => {
    const [allActors, setAllActors] = useState(actorsData.slice(5));
    const [actors, setActors] = useState(actorsData.slice(0, 5));
    const onAddRandomActor = () => {
        if (allActors.length === 0) {
          return alert('No hay mas actores  que añadir');
        }
    
        const randomIndex = Math.floor(Math.random() * allActors.length)
        setAllActors(allActors.filter((actor, index) => index !== randomIndex));
    
        const actorToAdd = allActors[randomIndex];
        setActors([actorToAdd, ...actors])
      }

      const sortActors = () => {
        const sortedActors = [...actors].sort((actor1, actor2) => {
          return actor1.name.localeCompare(actor2.name)
        })
    
        setActors(sortedActors)
      }

      const sortActorsPopularity = () => {
        const sortedActorsPopularity = [...actors].sort((actor1, actor2) => {
          return actor1.popularity - actor2.popularity
        })
    
        setActors(sortedActorsPopularity)
      }


      const onDelete = (id) => {
        
    
        const newArr = actors.filter((actor) => {
          return actor.id !== id
        })
    
        setActors(newArr);
    }
  
    return (
        <><Button type="success" onClick={onAddRandomActor} disabled={allActors.length === 0}>Add random contact</Button>
         <Button type="success" onClick={sortActors}>Sort by name</Button>
         <Button type="success" onClick={sortActorsPopularity}>Sort by popularity</Button>
        <div className="container mt-4">
            <table className="table table-borderless">
                <thead>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                        <th>Won<br />Oscar</th>
                        <th>Won<br />Emmy</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {actors.map((actor) => (
                        <tr key={actor.id}>
                            <td>
                                <img
                                    src={actor.pictureUrl}
                                    alt={actor.name}
                                    className="Actors-img" />
                            </td>
                            <td>{actor.name}</td>
                            <td>{actor.popularity.toFixed(2)}</td>
                            <td>{actor.wonOscar ? '🏆' : ''}</td>
                            <td>{actor.wonEmmy ? '🌟' : ''}</td>
                            <td><Button type="danger" onClick={() => onDelete(actor.id)}>Delete</Button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div></>
    );
  };
  
  
  export default Actors;