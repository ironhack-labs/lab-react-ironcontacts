import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";



function App() {

  const [displayedContacts, setDisplayedContacts] = useState(contacts.slice(0,5))


  const getRandomActor = () => {
    let contactsNum = displayedContacts.length;
    const randomIndex = Math.floor(Math.random() * (contacts.length - contactsNum) + contactsNum);
    const randomContact = contacts[randomIndex];
    const copydisplayedContacts = [...displayedContacts];
  
    copydisplayedContacts.push(randomContact);
    setDisplayedContacts(copydisplayedContacts);
  }

  const sortContactsAlphabetically = () => {
    const copydisplayedContacts = [...displayedContacts];

    copydisplayedContacts.sort((a, b) => a.name.localeCompare(b.name));    
    setDisplayedContacts(copydisplayedContacts);
  };

  const sortContactsPopularity = () => {
    const copydisplayedContacts = [...displayedContacts];

    copydisplayedContacts.sort((a, b) => b.popularity - a.popularity);
    setDisplayedContacts(copydisplayedContacts);
  };


  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <div className="buttons-wrap">
        <button onClick={getRandomActor}>Add actor</button>
        <button onClick={sortContactsAlphabetically}>Sort alphabetically</button>
        <button onClick={sortContactsPopularity}>Sort by popularity</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
          </tr>
        </thead>
        <tbody>
          {displayedContacts.map((elm, i) =>{
            return (
              <tr key={i}>
                <td><img className="actor-img" src={displayedContacts[i].pictureUrl} alt="actor img" /></td>
                <td>{displayedContacts[i].name}</td>
                <td>{Math.round(displayedContacts[i].popularity * 100) / 100}</td>
                <td>{displayedContacts[i].wonOscar === true && <span>🏆</span> }</td>
                <td>{displayedContacts[i].wonEmmy === true && <span>🌟</span> }</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
