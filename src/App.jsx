import "./App.css";
import contacts from "./contacts.json";
import { useState } from 'react';
function App() {
  const fiveStars = contacts.slice(0,5)
  const [contactsToDisplay, setContacts] = useState(fiveStars);


  const addRandomContact =() => {
    const remainingActors = contacts.slice(5);
    const randomActorIndex = Math.floor(Math.random() * remainingActors.length);
    const randomActor = remainingActors[randomActorIndex];
    setContacts((prevState)=>[randomActor, ...prevState]);
  }
  const sortByName = () => {
    const byName = [...contacs].sort((a,b) => a.name.localeCompare(b.name))
    setContacts(byName);
 
  }
  const sortByPopularity = () => {
    const byPopularity = [...contacts].sort((a,b) => b.popularity - a.popularity)
    setContacts(byPopularity);
  }

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>
      <button onClick={sortByName}>Sort by name</button>



    <div >
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contactsToDisplay.map((contacts, index)=> (
            <tr key = {index}>
              <td><img src ={contacts.pictureUrl} /></td>
              <td>{contacts.name}</td>
              <td>{contacts.popularity}</td>
              <td>{contacts.wonOscar && <p>🏆</p>}</td>
              <td>{contacts.wonEmmy && <p>🌟</p>}</td>
              <td><button onClick={() => deleteContact(contacts.id)}>Delete</button></td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>






    </div>
  );
}

export default App;







