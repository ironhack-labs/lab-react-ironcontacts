import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";

function App() {
  const [contactsList, setContacts] = useState(contacts.slice(0, 5))
  const addContact = () => {
    const randomIndex = Math.floor(Math.random() * contacts.length)
    const newContact = contacts[randomIndex]
    const isContactInList = contactsList.find((contact) => contact.id === newContact.id)


    if (!isContactInList){
      setContacts([...contactsList, newContact])
    } else {
      addContact()
    }
    }

    const sortByName = () => {
      setContacts([...contactsList].sort((a, b) => a.name.localeCompare(b.name)));
    }

    const sortByPopularity = () => {
      setContacts([...contactsList].sort((a, b) => b.popularity - a.popularity));
    }

    const deleteContact = (contactId) => {
      setContacts(contactsList.filter((con) => contactId !== con.id))
    }
  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onClick={addContact}>Add Random Contact</button>
      <button onClick={sortByName}>Sort By Name</button>
      <button onClick={sortByPopularity}>Sort By Popularity</button>

      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
        </tr>
        
          {contactsList.map((contact) => (
            <tr key={contact.id} className="contact">
              <td> <img src={contact.pictureUrl}></img> </td>
              <td> <span>{contact.name}</span></td>
              <td> <span>{contact.popularity.toFixed(2)}</span></td>
              <td>{contact.wonOscar && <i class="fa-solid fa-trophy"></i>}</td>
              <td>{contact.wonEmmy && <i class="fa-solid fa-star"></i>}</td>
              <td> <button onClick={() => deleteContact(contact.id)}>Remove</button></td>
            </tr>
            
          ))}
        
      </table>
    </div>
  );
}

export default App;
