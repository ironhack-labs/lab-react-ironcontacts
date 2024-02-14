import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react"; 
import trophy from "./assets/trophy.png";
import sun from "./assets/sun.png";

function App() {
  const [producersToDisplay, setProducersToDisplay] = useState(
    contacts.slice(0, 5)
  );
  const [remainingContacts, setRemainingContacts] = useState(contacts.slice(5, contacts.length));

  function addRandomProducer() {
    const updateRemaining = [...remainingContacts];
    let randomNum = Math.floor(Math.random() * remainingContacts.length);
    let randomContact = updateRemaining.splice(randomNum, 1)[0];
    const updatedProducersToDisplay = [...producersToDisplay, randomContact];
    setProducersToDisplay(updatedProducersToDisplay);
    setRemainingContacts(updateRemaining);
  }


  function sortByName() {
    const sortedNames = [...producersToDisplay].sort((a, b) => a.name.localeCompare(b.name));
    setProducersToDisplay(sortedNames);
  }

  function sortByPopularity() {
    const sortedPopularity = [...producersToDisplay].sort((a, b) => b.popularity - a.popularity);
    setProducersToDisplay(sortedPopularity);
  }

  function deleteContact (id) {
    const updatedProducers = producersToDisplay.filter(contact => contact.id !== id);
    setProducersToDisplay(updatedProducers);
  }


  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onClick={addRandomProducer}>Add Random Contact</button>
      <button onClick={sortByName}>Sort By Name</button>
      <button onClick={sortByPopularity}>Sort By Popularity</button>
      <table>
      <tbody>
      {producersToDisplay.map(producer => {
        return (
          <tr key={producer.id}>
            <td> Picture:
              <img src={producer.pictureUrl} alt={producer.name} />
            </td>
            <td>Name: {producer.name}</td>
            <td>Popularity: {producer.popularity}</td>
            <td>
            {producer.wonOscar && ( 
              <>
              Won Oscar: 
               <img className="icon" src={trophy}/>
               </>
               )} 
            </td>
            <td>
            {producer.wonEmmy && ( 
              <>
              Won Emmy: 
               <img className="icon" src={sun}/>
               </>
               )} 
            </td>
            <td>
              <button onClick={() => deleteContact(producer.id)}>Delete</button>
            </td>
          </tr>
        )
      })}
      </tbody>
      </table>
    </div>
  );
}

export default App;
