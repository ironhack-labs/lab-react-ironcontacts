import { useEffect, useState } from "react";
import contactsData from "./contacts.json";
import "./App.css";

console.log("LENGTH",contactsData.length);

function App() {
  const [contacts, setContacts] = useState(contactsData.slice(0, 5));

  const handleClick = () => {
    const randomNumber = Math.floor(Math.random() * contacts.length)
    // console.log("RANDOMNUMBER",randomNumber)
    console.log("RADOM CONTACT",contacts[randomNumber])
    setContacts([...contacts,contactsData[randomNumber]])

  }

  const handleSortByName = () => {
    const sortedArray = [...contacts].sort(compareByName)
    setContacts(sortedArray)
  }

  const handleSortByPopularity = () => {
    const sortedArray = [...contacts].sort((a,b)=>b.popularity-a.popularity)
    setContacts(sortedArray)
  }
//compare sort
function compareByName(a,b){
  const nameA = a.name.toUpperCase()
  const nameB = b.name.toUpperCase()
  let comparison = 0;

  if(nameA > nameB){comparison = 1}
  if(nameA < nameB){comparison = -1}
  return comparison
}

  return (
    <div className="App">
    {console.log("CONTACTS CON DIV",contacts)}
    <h1>IronContacts</h1>
      <button onClick={handleClick}>Add Random Contact</button>
      <button onClick={handleSortByName}>Sort by name</button>
      <button onClick={handleSortByPopularity}>Sort by popularity</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularitys</th>
            <th>Won oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {contacts.map((contact,index) => {
            return (
              <tr key={index}>
                <td>
                  <img
                    className="profile-pic"
                    src={contact.pictureUrl}
                    alt=""
                  />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>{contact.wonOscar ? <span>🏆</span> : null}</td>
                <td>{contact.wonEmmy ? <span>🏆</span> : null}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
