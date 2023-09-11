
import { useState } from 'react';
import './App.css';
import originalContacts from "./contacts.json"

function App() {
  const fiveContacts = originalContacts.slice(0, 10)
  const [contacts, setContacts] = useState(fiveContacts)

  const addRandom = () => {
    const remainingContacts = originalContacts.filter(
      contact => !contacts.includes(contact)
    )
    const randomMath = Math.round(Math.random() * remainingContacts.length)
    const randomContact = remainingContacts[randomMath]
    setContacts([...contacts, randomContact])
  }

  const sortByName = () => {
    const copy = [...contacts]
    copy.sort((a, b) => {
      return a.name.toLowerCase().localeCompare(b.name.toLowerCase())
    })
    setContacts(copy)
  }
  const sortByPopularity = () => {
    setContacts(previousContacts => {
      const copy = [...previousContacts]
      copy.sort((a, b) => b.popularity - a.popularity)

      return copy
    })
  }

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={addRandom}>Add Random</button>
      <button onClick={sortByName}>Sort By Name/button</button>
      <button onClick={sortByPopularity}>Sort By Popularity</button>
      <table>
        <thead>
          <tr>

            <td>Picture</td>
            <td>Name</td>
            <td>Popularity</td>
            <td>Won Oscar</td>
            <td>Won Emmy</td>


          </tr>
        </thead>
        <tbody>
          {contacts.map(contact => (
            <tr key={contact.id}>
              <td><img src={contact.pictureUrl} alt={contact.name} /></td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toPrecision(4)}</td>
              <td>{contact.wonOscar && "🏆"}</td>
              <td>{contact.wonEmmy && "🏆"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  );
}

export default App;
