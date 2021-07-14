import './App.css';
import contacts from "./contacts.json";
import RenderActorRow from "./components/ActorCard"
import React, {useState} from "react"

function App() {

  const [actors, setContacts] = useState(contacts.filter((_, idx) => idx < 5))

  return (
    <div className="App">
      <button>
        Add Random Contact
      </button>
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
