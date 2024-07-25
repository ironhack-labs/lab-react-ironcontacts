import "./App.css";
import { useState } from "react";
import ActorCard from "./components/ActorCard";
import contactsData from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(contactsData.slice(0, 5));


  const actorCards = contacts.map((contact) => {
    return (
      <ActorCard actor={contact} key={contact.name}></ActorCard>
    )
  })


  const addNewActor = () => {
    const actorList = contactsData.filter(contact => !contacts.includes(contact))
    if(actorList.length > 0) {
      const randomIndex = Math.floor(Math.random() * actorList.length);
        const randomActor = actorList[randomIndex];
        setContacts([...contacts, randomActor]);
    }
  }

  const deleteActor = () => {
    const actorCopy = [...contacts];
    actorCopy.pop();
    setContacts(actorCopy);
  }

  const sortByName = () => {
    const sortedActorsName = [...contacts].sort((a, b) => a.name.localeCompare(b.name));
    setContacts(sortedActorsName);
  };

  const sortByReverseName = () => {
    const sortedActorsName = [...contacts].sort((a, b) => b.name.localeCompare(a.name));
    setContacts(sortedActorsName);
  };

  const sortByPopularityDown = () => {
    const sortedActorPopularity = [...contacts].sort((a, b) => a.popularity - b.popularity);
    setContacts(sortedActorPopularity);
  };

  const sortByPopularityUp = () => {
    const sortedActorPopularity = [...contacts].sort((a, b) => b.popularity - a.popularity);
    setContacts(sortedActorPopularity);
  };


  const handleSortChange = (event) => {
  const sortOption = event.target.value;

    if (sortOption === 'Sort by A-Z') {
      sortByName();
    } else if (sortOption === 'Sort by Z-A') {
      sortByReverseName();
    } else if (sortOption === 'Popularity H - L') {
      sortByPopularityUp();
    } else if (sortOption === 'Popularity L - H') {
      sortByPopularityDown();
    }
  };


  return (
    <>
      <section>
        <h2>Actors List: </h2>
        <button onClick={addNewActor} className="action-buttons">Add Random Actor</button>
        <button className="action-buttons" onClick={deleteActor}>Delete Last Actor</button>
        <select name="Sort By" id="sort" className="action-buttons" onChange={handleSortChange}>
          <option value="Sort by A-Z">Sort by A-Z</option>
          <option value="Sort by Z-A">Sort by Z-A</option>
          <option value="Popularity H - L">Popularity 👆</option>
          <option value="Popularity L - H">Popularity 👇</option>
        </select>
         <ul className="actor-list">
          {actorCards}
        </ul>

      </section>
    </>
  );
}

export default App;
