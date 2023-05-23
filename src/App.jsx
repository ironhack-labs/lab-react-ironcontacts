import { useState } from 'react';
import './App.css';
import contactsData from "../src/contacts.json"

function App() {
  const contacstArray = contactsData.slice(0, 5)

  const [contacts, setContacts] = useState(contacstArray)

  const addContact = () => {
    const contactRandom = contactsData[Math.floor(Math.random() * (contactsData.length - 6 + 1)) + 6]
    const contacsCopy = [...contacts]
    contacsCopy.unshift(contactRandom)
    setContacts(contacsCopy)
    // console.log(contacsCopy)
  }

  const sortContactsPopularity = () => {
    const contactsByPopularity = [...contacts].sort((a, b) => b.popularity - a.popularity)
    setContacts(contactsByPopularity)
  }

  const sortContactsName = () => {
    const contactsByName = [...contacts].sort((a, b) => a.name.localeCompare(b.name))
    setContacts(contactsByName)
    // console.log(sortContacts)
  }

  const deleteContact = idToDelete => {
    const contactsFilter = contacts.filter((elm) => { return elm.id != idToDelete })
    setContacts(contactsFilter)
  }


  return (

    <div className="App">
      <h2 className='text-center'>IronContacts</h2>
      <div className='flex'>
        <button onClick={addContact}>Add Random Contact</button>
        <button onClick={sortContactsPopularity}>Sort by Popularity</button>
        <button onClick={sortContactsName}>Sort by Name</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(elm => {
            return (
              <tr key={elm.id}>
                <td><img className='image-tabla' src={elm.pictureUrl} alt={elm.name} /></td>
                <td>{elm.name}</td>
                <td>{(elm.popularity).toFixed(2)}</td>
                {elm.wonOscar ? <td className='iconos'><i class="bi bi-emoji-smile-fill"></i></td> : <td className='iconos'><i class="bi bi-emoji-frown-fill"></i></td>}
                {elm.wonEmmy ? <td className='iconos'><i class="bi bi-emoji-smile-fill"></i></td> : <td className='iconos'><i class="bi bi-emoji-frown-fill"></i></td>}
                <td><button onClick={() => deleteContact(elm.id)}>Delete</button></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;

