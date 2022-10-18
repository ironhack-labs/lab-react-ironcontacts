import { useState } from "react";
import contactsData from "./contacts.json";
import "./App.css";


function App() {

  let firstFive = contactsData.slice(0, 5);
  const [contacts, setContacts] = useState(firstFive);
  const copyData = [...contactsData]

  const addContact = () => {
    let randomIndex = Math.floor(Math.random() * copyData.length)
    let randomContact = copyData[randomIndex];
    const copy = [...contacts]
    copy.push(randomContact)
    copyData.splice(randomIndex, 1)
    return setContacts(copy)
  }

  const sortByPopularity = () => {
    const copy = [...contacts]
    const sortedArr = copy.sort((a, b) => b.popularity - a.popularity)
    return setContacts(sortedArr)
  }

  const sortByName = () => {
    const copy = [...contacts]
    const sortedArr = copy.sort((a, b) => a.name > b.name ? 1 : -1)
    return setContacts(sortedArr)
  }

  const deleteContact = (id) => {
    const newContacts = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContacts);
  }

  return (
    <div className="App">
    <h1>IronContacts</h1>
    <button onClick={addContact} className="nav">Add Random Contact</button>
    <button onClick={sortByPopularity} className="nav">Sort by popularity</button>
    <button onClick={sortByName} className="nav">Sort by name</button>
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
        {contacts.map((contact) => {
          return (
            <tr key={contact.id}>
              <td><img src={contact.pictureUrl} alt={contact.name} /></td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>{contact.wonOscar && '🏆'}</td>
              <td>{contact.wonEmmy && '🎖'}</td> 
              <td className="delete" ><button onClick={()=>{deleteContact(contact.id)}} >Delete</button></td>      
            </tr>
          );
        })}
        </tbody>
      </table>
    </div>
  );
}

export default App;

