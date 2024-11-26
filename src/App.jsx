import "./App.css";
import contactsData from "./contacts.json"
import { useState } from "react";

function App() {

const [contacts, setContacts] = useState(contactsData.slice(0,5));

const addRandomContact = () => {

  const currentIds = new Set(contacts.map((contact) => contact.id));

  const remainingContacts = contactsData.filter((contact) => !currentIds.has(contact.id));

  if(remainingContacts.length === 0) {
    alert("No hay más contactos para agregar");
    return;
  }

  const randomIndex = Math.floor(Math.random() * remainingContacts.length);
  const randomContact = remainingContacts[randomIndex]

  setContacts((prevContacts) =>[...prevContacts, randomContact])


}
const sortByName = () => {
    const sortedContacts = [...contacts].sort((a, b) => a.name.localeCompare(b.name));
    setContacts(sortedContacts)
  }

  const sortByPopularity = () => {
    const sortedContacts = [...contacts].sort((a, b) => b.popularity - a.popularity)
    setContacts(sortedContacts)
  }

  const deleteContact = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id)
    setContacts(updatedContacts)
  }
  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onClick={addRandomContact}>Agregar contacto aleatorio</button>
      <button onClick={sortByName}>Ordenar por nombre</button>
      <button onClick={sortByPopularity}>Ordenar por popularidad</button>
      <table>
        <thead>
          <tr>
            <th><h2>Picture</h2></th>
            <th><h2>Name</h2></th>
            <th><h2>Popularity</h2></th>
            <th><h2>Won Oscar</h2></th>
            <th><h2>Won Emmy</h2></th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) =>(
            <tr key={contact.id}>
              <td>
                <img 
                src={contact.pictureUrl}
                alt={contact.name}
                style={{width: "100px"}}
                ></img>
              </td>
              <td>
                <h3>{contact.name}</h3>
              </td>
              <td>
                <h3>{Number(contact.popularity.toFixed(2))}</h3>
              </td>
              <td>
                {contact.wonOscar ? "🏆" : "" }
              </td>
              <td>
                {contact.wonEmmy ? "🌟" : "" }
              </td>
              <td>
                <button onClick={() => deleteContact(contact.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
          
        </tbody>
      </table>
    </div>
  );
}

export default App;
