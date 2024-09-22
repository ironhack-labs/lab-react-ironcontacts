import { useState } from "react";
import "./App.css";
import contacts from "./contacts.json"

function App() {
  const [contact, setContact] = useState(contacts.slice(0, 5))

  const handleAddContact = () => {
    const randomIndex = Math.floor(Math.random() * (contacts.length - 5)) + 5
    const randomContact = contacts[randomIndex]
    if (contacts.slice(0, 5) !== randomContact) {
      setContact([...contact, randomContact])
    }
  }

  const handleDelete = (id) => {
    const deleteContacts = contact.filter((eachContact) => eachContact.id !== id)
    setContact(deleteContacts)
  }

  const handlePopularity = () => {
    const byPopularity = [...contact].sort((a, b) => b.popularity - a.popularity)
    setContact(byPopularity)
  }

  const handleName = () => {
    const byName = [...contact].sort((a, b) => a.name.localeCompare(b.name))
    setContact(byName)
  }
  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button style={{marginRight: '10px', marginBottom: '30px'}} onClick={handleAddContact}>Add Random Contact</button>
      <button style={{marginRight: '10px', marginBottom: '30px'}} onClick={handlePopularity}>Sort by Popularity</button>
      <button style={{marginRight: '10px', marginBottom: '30px'}} onClick={handleName}>Sort by Name</button>
      <table>
        <thead>
          <tr>
            <th> Picture </th>
            <th> Name </th>
            <th> Popularity </th>
            <th> Won Oscar </th>
            <th> Won Emmy </th>
            <th> Actions </th>
          </tr>
        </thead>
        <tbody>
          {contact.map((eachContact, index) => (
            <tr key={index}>
              <td>
                <img src={eachContact.pictureUrl}
                  style={{ width: "130px", height: "200px" }}
                  alt={eachContact.name}></img>
              </td>
              <td>{eachContact.name}</td>
              <td>{eachContact.popularity.toFixed(2)}</td>
              <td>{eachContact.wonOscar === true ? "🏆" : ""}</td>
              <td>{eachContact.wonEmmy === true ? "🌟" : ""}</td>
              <td><button onClick={() => handleDelete(eachContact.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
