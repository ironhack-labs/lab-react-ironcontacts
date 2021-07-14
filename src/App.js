import './App.css';
import contacts from "./contacts.json";
import RenderActorRow from "./components/ActorCard"
import React, {useState} from "react"

function App() {

  const [actors, setState] = useState(contacts.filter((_, idx) => idx < 5))

  function pushNewValue(contacts, actors){

    let sortedContacts = contacts.filter((value) => !actors.includes(value));

    if(sortedContacts.length!==0){
      let randIdx = Math.floor(Math.random() * sortedContacts.length);
      let newActor = sortedContacts[randIdx];
      let updatedActors = actors.concat([newActor]);
      setState(updatedActors)
    }
  }

  return (
    <div className="App">
      <button onClick={()=>pushNewValue(contacts, actors)}>Add Random Contact</button>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
        {actors.map((actor) => {
          return <RenderActorRow pictureUrl = {actor.pictureUrl } name = {actor.name} popularity = {actor.popularity} />
        })}
      </table>
    </div>
  );

  
}

export default App;
