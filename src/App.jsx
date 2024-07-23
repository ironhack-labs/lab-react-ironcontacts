import { useState } from "react";
import "./App.css";
import contacts from "./contacts.json"


function App() {

  let totalContact = [...contacts]
  let firstContactSet = totalContact.slice(0,5)

  const [actorsOne,setActorsOne] = useState(firstContactSet)

  function addRandomContact() {
   /* Creating an array with ids of actors from the existing list */
    let actorIds = actorsOne.map(actor => actor.id);
    /* Now checking if already existing ids are a part of the contacts.json if so they will filter them */
    let remainingContacts = contacts.filter(
      contact => !actorIds.includes(contact.id)
    );
  /* Selecting a random contact to add from the filtered out array from above */
    if (remainingContacts.length > 0) {
      let randomActor = Math.floor(Math.random() * remainingContacts.length);
      let randomContact = remainingContacts[randomActor];
      setActorsOne([...actorsOne, randomContact]);
    }
  }
  function sortByPopularity(){
    /* Creating a copied array and sorting them based on popularity */
    let sortedActors = [...actorsOne].sort((a, b) => b.popularity - a.popularity);
    setActorsOne(sortedActors);
  }

  function sortByName(){
    let sortedActors = [...actorsOne].sort((a,b) => a.name.localeCompare(b.name))
    setActorsOne(sortedActors);
  }

  function deleteActor(id){

    let updatedActors = actorsOne.filter(actor => actor.id !== id);
    setActorsOne(updatedActors);
  }


  return (
    <div className="App">
      <button onClick={addRandomContact} className="button-style">Add Random Contact</button>
      <button onClick={sortByPopularity} className="button-style">Sort by Popularity</button>
      <button onClick={sortByName} className="button-style">Sort by Name</button>
      <div className="table">
        <div className="header-row">
          <div className="header-cell">Picture</div>
          <div className="header-cell">Name</div>
          <div className="header-cell">Popularity</div>
          <div className="header-cell">Won Oscar</div>
          <div className="header-cell">Won Emmy</div>
          <div className="header-cell">Actions</div>
        </div>
        {actorsOne.map((actor) => (
          <div className="data-row" key={actor.id}>
            <div className="data-cell">
              <img src={actor.pictureUrl} alt={actor.name} width="100" />
            </div>
            <div className="data-cell">{actor.name}</div>
            <div className="data-cell">{Math.round(actor.popularity)}</div>
            <div className="data-cell">{actor.wonOscar ? "🏆" : ""}</div>
            <div className="data-cell">{actor.wonEmmy ? "🌟" : ""}</div>
            <div className="data-cell" ><button onClick={() => deleteActor(actor.id)} >Delete</button></div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default App;
