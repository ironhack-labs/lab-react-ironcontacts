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

  function sortByName() {
    let sortedActors = [...actors];
    sortedActors.sort((a,b) => {
      if(a.name < b.name) return -1;
      if(a.name > b.name) return 1;
      return 0;
    })
    setState(sortedActors)
  }

  function sortByPop() {
    let sortedActors = [...actors];
    sortedActors.sort((a,b) => {
      if(a.popularity < b.popularity) return 1;
      if(a.popularity > b.popularity) return -1;
      return 0;
    })
    setState(sortedActors)
  }

  function deleteEntry(id){
    let listAfterDelete = [...actors]
    listAfterDelete.filter(el => el.id !== id)
    setState(listAfterDelete)
  }


  return (
    <div className="App">
      <button onClick={()=>pushNewValue(contacts, actors)}>Add Random Contact</button>
      <button onClick={()=>sortByName()}>Sort by name</button>
      <button onClick={()=>sortByPop()}>Sort by popularity</button>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Action</th>
        </tr>
        {actors.map((actor) => {
          return <RenderActorRow actor = {actor} handleDelete = {deleteEntry}/>
        })}
      </table>
    </div>
  );

  
}

export default App;
