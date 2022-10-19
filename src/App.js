import "./App.css";
import contactsFromJSON from "./contacts.json";
import { useState } from "react";

function App() {
  let firstFive = contactsFromJSON.slice(0, 5);
  let remainder = contactsFromJSON.slice(6, 51);
  const [contacts, setContacts] = useState(firstFive);

  const addRandomContact = () => {
    const newList = [...contacts]
    const contact = remainder[Math.floor(Math.random()*remainder.length)];
     newList.push(contact)
    remainder.splice(parseInt(remainder.indexOf(contact)), 1)
    
    console.log(newList.length);
    console.log(remainder.length);
    return setContacts(newList)
  };



  const sortByName = () => {
    setContacts((prevValue) => {
      const copy = [...prevValue]; 
      copy.sort( (a, b) => {
        
        return a.name.localeCompare(b.name) 
      } )
      return copy
    })
  }


  const sortByPopularity = () => {
    setContacts((prevValue) => {
      const copy = [...prevValue]; 
      copy.sort( (a, b) => {
        return b.popularity - a.popularity 
      } )
      return copy
    })
  }

  const deleteContact = (contactId) => {
    
    const newList = contacts.filter((contact) => {

      return contact.id !== contactId;
    });
    setContacts(newList);
  };


  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button
        onClick={addRandomContact}
      >
        Add Random Contacts
      </button>
      <button onClick={() => {
        sortByPopularity()
      }}>Sort by Popularity</button>
      <button onClick={sortByName}>Sort by Name</button>
      <table>
        <thead>
          <tr>
            <th>
              <h2>Picture</h2>
            </th>
            <th>
              <h2>Name</h2>
            </th>
            <th>
              <h2>Popularity</h2>
            </th>
            <th>
              <h2>Won Oscar</h2>
            </th>
            <th>
              <h2>Won Emmy</h2>
            </th>
            <th>
              <h2>Actions</h2>
            </th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => {
            return (
              <tr key={contact.id}>
                <td>
                  <img src={contact.pictureUrl} alt="" />{" "}
                </td>
                <td>
                  <p>{contact.name}</p>
                </td>
                <td>
                  <p>{contact.popularity}</p>
                </td>
                <td>{contact.wonOscar && <p> 🏆 </p>}</td>
                <td>{contact.wonEmmy && <p> 🏆 </p>}</td>
                <td><button
                  onClick={() => {
                    deleteContact(contact.id);
                  }}
                >
                  Delete
                </button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
