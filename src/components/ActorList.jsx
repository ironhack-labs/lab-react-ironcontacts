import { useState } from 'react';
import actorsData from '../contacts.json';


const Actors = () => {
    const [actors, setActors] = useState(actorsData.slice(0, 5));
    const onDelete = (actorId) => {
        setActors((prevActors) => prevActors.filter((actor) => actor.id !== actorId));
    };


    const getRandomActor = () => {
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
            <button type="primary" onClick={getRandomActor}>Get Random Actor</button>
            <button type="primary" onClick={sortByPopularity}>Sort by popularity</button>
            <button type="primary" onClick={sortByName}>Sort by name</button>
            {actors.map((actor) => (
                <div key={actor.id}>
                    <h1>Picture</h1>
                    <img src={actor.pictureUrl} className="card-img-top" alt="{actor.name}" />
                    <div className="card-body">
                        <button type="primary" onClick={() => onDelete(actor.id)}>Delete </button>
                        <h5 className="card-title">{actor.name}</h5>
                        <p className="card-text">{actor.popularity}</p>
                        <p className="card-text">{actor.wonOscar ? '🏆': ''}Won Oscar</p>
                        <p className="card-text">{actor.wonEmmy ? '🌟': ''}Won Emmy</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Actors;