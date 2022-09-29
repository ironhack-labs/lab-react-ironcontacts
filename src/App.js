import "./App.css";
import contactList from "./contacts.json";
import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState([]);
  
  const [sortToggle, setSortToggle] = useState(true)

  function sortContacts() {
        const contactsToSort = [...contacts]
        contactsToSort.sort((a, b) => {
         return sortToggle 
          ? b.popularity - a.popularity
          : a.popularity - b.popularity
        })
        setContacts(contactsToSort)
        setSortToggle(!sortToggle)
  }

  function sortNames() {
        const namesToSort = [...contacts]
        namesToSort.sort((a, b) => {
          return sortToggle
          ? b.name.localeCompare(a.name)
          : a.name.localeCompare(b.name)
        })
        setContacts(namesToSort)
        setSortToggle(!sortToggle)
  }
  // ^^^ alteratively the functions above (sortContacts and sortNames) could be just one that takes 3 arguments: 1.array copy to sort, 2.property to sort by, 3.optionally a different toggle
  

  function getRandomContact(contactList) {
    const randomIndex = Math.floor(Math.random() * contactList.length)
    return contactList.splice(randomIndex, 1)[0]
  }
  // console.log(contacts)
  return (
    <div className="App">
    <h1>IronContacts</h1>
     <button onClick={()=> {
        setContacts([...contacts, getRandomContact(contactList)])
      }}>Add Random Contact</button>
      <button onClick={sortContacts}>Sort by popularity</button>
      <button onClick={sortNames}>Sort by name</button>
      <table >
        <thead>
          <tr>
            <th><b>Picture</b></th>
            <th><b>Name</b></th>
            <th><b>Popularity</b></th>
            <th><b>Won an Oscar</b></th>
            <th><b>Won an Emmy</b></th>
            <th><b>Actions</b></th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => {
            return (      
              <tr key={index}>
                <td><img style={{width: "80px"}} src={contact.pictureUrl} alt="someSmugHollywoodStar"></img></td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                <td>{contact.wonOscar 
                  ? "🏆"
                  : null
                }</td>
                <td>{contact.wonEmmy 
                  ? "🌟"
                  : null
                }</td>
                <td><button onClick={console.log(contact)}>Launch cancellation witchhunt campaign</button></td>
              </tr>
            );
         })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
