import './App.css';
import contactsArr from "../contacts.json";
import ContactList from './ContacList/ContactList';
import { useState } from 'react';

function App() {

  const firstFive = contactsArr.slice(0, 5)
  const remainingContacts = contactsArr.slice(5, contactsArr.length)

  const [contacts, setContacts] = useState(firstFive)

  function handleNewRandomContact() {
    const contactsCopy = [...contacts]
    const randomNumber = Math.floor(Math.random() * (remainingContacts.length - 0) + 0)
    contactsCopy.unshift(remainingContacts[randomNumber])
    setContacts(contactsCopy)
  }

  function handleSortByName() {
    const contactsCopy = [...contacts]
    contactsCopy.sort((elm1, elm2) => {
      if (elm1.name > elm2.name) {
        return 1;
      }
      if (elm1.name < elm2.name) {
        return -1;
      }
      return 0;
    })
    setContacts(contactsCopy)
  }


  function handleSortByPopularity() {
    const contactsCopy = [...contacts]
    contactsCopy.sort((elm1, elm2) => {
      if (elm1.popularity > elm2.popularity) {
        return -1;
      }
      if (elm1.popularity < elm2.popularity) {
        return 1;
      }
      return 0;
    })
    setContacts(contactsCopy)
  }

  function handleDelete(idToDelete) {
    const newContacts = contacts.filter(elm => elm.id != idToDelete)
    setContacts(newContacts)
  }




  return (

    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={handleNewRandomContact}>Add random contact</button>
      <button onClick={handleSortByName}>Sort by name</button>
      <button onClick={handleSortByPopularity}>Sort by popularity</button>

      <table>
        <tr>
          <th><strong>Picture</strong></th>
          <th><strong>Name</strong></th>
          <th><strong>Popularity</strong></th>
          <th><strong>Won an Oscar</strong></th>
          <th><strong>Won an Emmy</strong></th>
          <th><strong>Actions</strong></th>
        </tr>
        {contacts.map(({ name, pictureUrl, popularity, id, wonEmmy, wonOscar }) => {
          return (
            <tr key={id}>
              <td><img src={pictureUrl} alt=''></img></td>
              <td>{name}</td>
              <td>{popularity}</td>
              {wonOscar ? <td>🏆</td> : <td></td>}
              {wonEmmy ? <td>🏆</td> : <td></td>}
              <button onClick={() => handleDelete(id)}>Elimina</button>
            </tr>
          )
        })}
      </table>
    </div>
  );
}

export default App;

