import { useState } from "react";
import data from "./contacts.json";
import "./App.css";

function App() {

  const [contacts, setContacts] = useState(data.slice(0, 5));

  const fiveFirstContacts = contacts.map((contact) => {
    return (
      <tr key={contact.id}>
        <td><img src={contact.pictureUrl} alt="" /></td>
        <td>{contact.name}</td>
        <td>{contact.popularity}</td>
        <td>{contact.wonOscar ? "🏆" : ""}</td>
        <td>{contact.wonEmmy ? "🌟" : ""}</td>
        <th><button className="delete-btn" onClick={() => onDelete(contact.id)}>Delete</button></th>
      </tr>
    );
  });

  function handleAddRandom(){
    const remainingContacts = data.filter(contact => !contacts.some( c => c.id === contact.id))
    const randomNumber = Math.floor(Math.random() * remainingContacts.length)
    const randomCelebrity = remainingContacts[randomNumber]
    if(remainingContacts.length > 0) setContacts([...contacts, randomCelebrity])
    else{ console.log("No more contacts")}
  }

  function handleOnPopularity(){
    const byPopularity = [...contacts].sort((a,b) => b.popularity - a.popularity)
    setContacts(byPopularity)
  }

  function handleByName(){
    const byName = [...contacts].sort((a,b) => a.name.localeCompare(b.name))
    setContacts(byName)
  }

  const onDelete = (id) => {
    const updatedArray = [...contacts].filter(contact => contact.id !== id)
    setContacts(updatedArray)
  }

  return (
    <div className="main-table">
      <h1>IronContacts</h1>
      <div className="btns">
        <button className="btn" 
          onClick={handleAddRandom}
        > Add random contact
        </button>
        <button className="btn"
          onClick={handleOnPopularity}
        >Sort by Popularity</button>
        <button className="btn" 
          onClick={handleByName}
        > Sort by Name
        </button>
      </div>
      <br />
      <table className="table">
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {fiveFirstContacts}
        </tbody>
      </table>
    </div>
  );
}

export default App;
