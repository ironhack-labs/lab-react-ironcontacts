import './App.css';
import { useState } from 'react'
import contactsjson from './contacts.json'


function App() {
  const contactsCopy = [...contactsjson]
  const fiveContacts = contactsCopy.slice(0, 5)

  const [contacts, setContacts] = useState(fiveContacts)

  const addContact = () => {

    const randomContact = (Math.floor(Math.random() * contactsjson.length))

    fiveContacts.push(contactsjson[randomContact])
    setContacts(fiveContacts)
  }

  const popularitySorted = () => {
    const sorted = fiveContacts.sort((a, b) => {
      if (a.popularity > b.popularity) {
        return -1;
      }
      if (a.popularity < b.popularity) {
        return 1;
      }
      return 0;
    })
    setContacts(sorted)
  }

  const nameSorted = () => {
    const sortedname = fiveContacts.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    })
    setContacts(sortedname)
  }

  const deleteContact = (id) => {
    const deleted = fiveContacts.filter(contact => {
      return contact.id !== id
    })
    setContacts(deleted)
  }

  return (
    <div className="App">
      <button onClick={addContact}>Add Contact</button>
      <button onClick={popularitySorted}>Popularity</button>
      <button onClick={nameSorted}>Name</button>
      <table>
        <tbody>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>

          {contacts.map(contact => {
            return (
              <tr key={contact.id}>
                <td><img src={contact.pictureUrl} alt="" style={{ width: "100px" }} /></td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>{contact.wonOscar ? <p>🎂</p> : <p>💩</p>}</td>
                <td>{contact.wonEmmy ? <p>🎂</p> : <p>💩</p>}</td>
                <button onClick={() => deleteContact(contact.id)}>DELETE</button>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
