import { useState } from "react";
import contacts from "../contacts.json";
import IronhackCard from "./IronhackCard";

export default function IronhackList() {
  //const [ironhackers, setIronhackers] = useState(contacts.slice(0, 5));

  const [ironhackers, setIronhackers] = useState(getRandomContacts(5));

  function getRandomContacts(count) {
    const shuffledContacts = [...contacts]; // Create a copy of the original contacts array
    for (let i = shuffledContacts.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledContacts[i], shuffledContacts[j]] = [shuffledContacts[j], shuffledContacts[i]];
    }
    return shuffledContacts.slice(0, count);
  }

  const handleRandomizeClick = () => {
    setIronhackers(getRandomContacts(5));
  };

  function sortByName() {
    const sortedByName = [...ironhackers].sort((a, b) => a.name.localeCompare(b.name));
    setIronhackers(sortedByName);
  }

  function sortByPopularity() {
    const sortedByPopularity = [...ironhackers].sort((a, b) => b.popularity - a.popularity);
    setIronhackers(sortedByPopularity);
  }

  const handleDelete = (id) => {
    const filteredContacts = ironhackers.filter((ironhacker) => ironhacker.id !== id);
    setIronhackers(filteredContacts);
  };
  

  return (
    <div>
      <div>
        <button onClick={handleRandomizeClick}>Add Random Contact</button>
        <button onClick={sortByName}>Sort by Name</button>
        <button onClick={sortByPopularity}>Sort by Popularity</button>
      </div>

      <div className="IronhackCard">
      <div className="info-container-headers">
        <h4>Picture</h4>
        <h4>Name</h4>
        <h4>Popularity</h4>
        <h4>Won Oscar</h4>
        <h4>Won Emmy</h4>
        <h4>Actions</h4>
      </div>
        {ironhackers.map((ironhacker) => (
          <div key={ironhacker.id} className="info-container-columns">
            <div className="column">
              <img
                src={ironhacker.pictureUrl}
                alt={`Profile of ${ironhacker.name}`}
                style={{ width: "100px", height: "100px", marginBottom: "10px" }}
              />
            </div>

            <div className="column">
              <p>{ironhacker.name}</p>
            </div>

            <div className="column">
              <p>{Math.round(ironhacker.popularity*100)/100}</p>
            </div>

            <div className="column">
            {ironhacker.wonOscar ? <span>🏆</span> : null}
            </div>

            <div className="column">
            {ironhacker.wonEmmy ? <span>🏆</span> : null}
            </div>

            <div className="column">
            <button onClick={() => handleDelete(ironhacker.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}