import "./App.css"
import contactsJSON from "./contacts.json"
import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState(contactsJSON.slice(0, 5));
  const sortPop = [...contacts].sort((a, b) => a.popularity - b.popularity);
  const sortName = [...contacts].sort((a, b) => (a.name > b.name ? 1 : -1));
  const deleteProducer = producerId =>{
    const filteredProducer = contacts.filter(producer=>{
        return producer.id !== producerId
    });
    setContacts(filteredProducer);
};

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <div id="buttons">
        <button onClick={()=>setContacts(contacts.concat(contactsJSON[(Math.floor(5 + Math.random()*contactsJSON.length))]))}>Add Producer</button>
        <button onClick={()=>setContacts(sortName)}>Sort by name</button>
        <button onClick={()=>setContacts(sortPop)}>Sort by popularity</button>
      </div>
      <table id="contacts">
        <thead>
          <tr id="titles">
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((producer, index)=>{
            return(<tr key={index} id="producers">
              <img src={producer.pictureUrl}/>
              <td id="name">{producer.name}</td>
              <td>{producer.popularity}</td>
              <td>{producer.wonOscar ? "🏆" : ""}</td>
              <td>{producer.wonEmmy ? "🌟" : ""}</td>
              <button id="delete" onClick={()=>deleteProducer(producer.id)}>Delete</button>
            </tr>
          )})}
        </tbody>
      </table>
    </div>
  );
}

export default App;
