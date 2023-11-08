import { useState } from "react";
import "./App.css";
import contacts from './contacts.json'

function App() {
  
  const [firstFiveContacts, setFirstFiveContacts] = useState(contacts.slice(0, 5)) 
  const [otherContacts, setOtherContacts] = useState(contacts.slice(5))
  
  let randomIndex = Math.floor(Math.random() * (otherContacts.length - 1));
  const randomContact = otherContacts[randomIndex];
  

  //Nu de firstFiveContacts array aanpassen met het randomContact

  const addRandomContact = function (element) {
    const newArrayContacts = firstFiveContacts.push(element);
    //bovenstaande klopt niet.... maar hoe moet het wel??

    setFirstFiveContacts(newArrayContacts);
  };

  // Wanneer er op de knop geklikt, wil ik dat de functie addRandomContact wordt uitgevoerd
  // Wat moet de parameter zijn voor deze functie?
  // Hoe voeg ik het nieuwe element toe aan de bestaande array, uitgevoerd in een nieuwe array?? 

  
  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>

      <table>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Won an Oscar</th>
              <th>Won an Emmy</th>
            </tr>

      {firstFiveContacts.map(function (contactInfo) {
        return (
            <tr>
              <td><img src={contactInfo.pictureUrl}/></td>
              <td>{contactInfo.name}</td>
              <td>{contactInfo.popularity.toFixed(2)}</td>
              <td>{contactInfo.wonOscar && <p>TROPHY</p>}</td>
              <td>{contactInfo.wonEmmy && <p>STAR</p>}</td>
            </tr>
          
        );
      })}
      </table>

      <button onClick={function () {addRandomContact (randomContact)}}>Add a random contact</button>

    
    </div>
  );
}

export default App;
