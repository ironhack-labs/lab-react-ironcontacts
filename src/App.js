import './App.css';
import { useState } from "react";
import contactsJson from "./contacts.json";

function App() {
  
  // listing contacts: iteration 1 ++
  const listedContacts = contactsJson.slice(0, 5)
  const [contacts, setContact] = useState(listedContacts);

  // contacts not listed
  const contactsNotListed = contactsJson.slice(5, contactsJson.length)

  const addRandomContact = () => {
    // add random contact from contacts that are not listed
    let randomContact = Math.floor(Math.random() * contactsNotListed.length) 

    let newContact = contactsNotListed.splice(randomContact, 1)

    setContact([...contacts, newContact[0]]);
  }

  // sorting by name
  const sortByName = () => {setContact([...contacts].sort((a, b) => a.name.localeCompare(b.name)))}

  // sorting by popularity
  const sortByPopularity = () => {setContact([...contacts].sort((a, b) => b.popularity - a.popularity))}

  // removing contacts
  const deleteContact = (id) => {
    const updatedContacts = [...contacts].filter(contact => contact.id !== id);
    setContact(updatedContacts);
  }

  let titleMessage = contacts.length > 0 
        ? <p>Number of IronContacts: {contacts.length}</p> 
        : <p>There are no more IronContacts to be displayed</p>

  return (
    <div className="App">
      <h1>IronContacts</h1>

      {titleMessage}

      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>
      <button onClick={sortByName}>Sort by name</button>

      <table>
        <tbody>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Populatiry</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Action</th>
          </tr>

          {contacts.map((contact) => {
            return (
              <tr key={contact.id}>
                <td key={contact.id}><img src={contact.pictureUrl} alt="" width={100}/></td>
                <td>{contact.name}</td>
                <td>{(Math.ceil(contact.popularity) / 2).toFixed(2)}</td>
                <td>{contact.wonOscar ? "🏆" : ""}</td>
                <td>{contact.wonEmmy ? "\u2B50" : ""}</td>
                <td><button onClick={ () => deleteContact(contact.id) }>Delete</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );

}

export default App;
