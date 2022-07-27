import { useState } from "react";
import "./App.css";
import allContacts from "./contacts.json"


let fiveContacts = allContacts.slice(0,5)



function App() {
  
  const [contacts, setContacts] = useState(fiveContacts);

  const addRandomContact = () => {
    const randomContact =  allContacts[Math.floor(Math.random()*allContacts.length)];
    const found = contacts.find(element => element.id=== randomContact.id);
    if (found === undefined) {
      setContacts((prevList) => {
        const prevListCopy = [...prevList];
        prevListCopy.push(randomContact);
        return prevListCopy;
      })
    }
    else {
      addRandomContact();
    }
  }

  const sortByName = () => {
    setContacts((prevList) => {
      const prevListCopy = [...prevList];
      prevListCopy.sort(function(a,b) {
        return a.name.localeCompare(b.name)
      })
      return prevListCopy;
    })
  }

  const sortByPopularity = () => {
    setContacts((prevList) => {
      const prevListCopy = [...prevList];
      prevListCopy.sort(function(a,b) {
        return b.popularity - a.popularity;
      })
      return prevListCopy;
    })
  }

  const deleteContact = (contactId) => {
    setContacts((prevList) => {
      const newList = prevList.filter( (element) => {
        return element.id !== contactId;
      })
      return newList;
    })
  }
  
  return <div className="App">

    <button onClick={addRandomContact}>Add random contact</button>
    <button onClick={sortByName}>Sort by name</button>
    <button onClick={sortByPopularity}>Sort by popularity</button>

    <table>
      <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
        <th>Won an Oscar</th>
        <th>Won an Emmy</th>
      </tr>

      {contacts.map( (contact) => {
        return (
          <tr key={contact.id}>
              <td> <img src={contact.pictureUrl}/> </td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>

              {contact.wonOscar 
              ? <td>🏆</td>
              : <td></td>}

              {contact.wonEmmy 
              ? <td>🏆</td>
              : <td></td>}

              <td> <button onClick={() => {deleteContact(contact.id)}}> Delete </button></td>
          </tr>
        )

      }
      )}
    </table>

  </div>;
}
export default App;
