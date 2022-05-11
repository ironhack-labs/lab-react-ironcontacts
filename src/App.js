import { useState } from 'react';
import contactArr from './contacts.json'
import './App.css';



function App() {
  let fiveContacts = contactArr.slice(0, 5)

  const [contacts, setContacts] = useState(fiveContacts);

  let otherContacts = contactArr.slice(5, contactArr.length)
  let addNewContact = () => {


    let otherContacts = contactArr.filter((newContact) => {
      return !contacts.includes(newContact)
    })

    let randomIndex = otherContacts[Math.floor(Math.random() * otherContacts.length)]
    setContacts(contacts.concat(randomIndex))
  }

  let sortPopularity = () => {
   contacts.sort((a, b) => (a.popularity < b.popularity) ? 1 : -1)
    setContacts(sortPopularity)
  }

  let deleteContact = () => {

  }

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={addNewContact}>Add Random Contact</button>
      <button onClick={sortPopularity}>Sort by popularity</button>
      <button>Sort by name</button>

      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won <br /> an Oscar</th>
            <th>Won <br /> an Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>

        {contacts.map((person) => {
          return (
            <tr>
              <td>{<img src={person.pictureUrl} alt={person.name} />} </td>
              <td>{person.name}</td>
              <td>{person.popularity.toFixed(2)}</td>
              <td>{person.wonOscar ? '🏆' : ''}</td>
              <td>{person.wonEmmy ? '🏆' : ''}</td>
              <td> <button onClick={deleteContact}>Delete</button></td>
            </tr>

          );
        })}


      </table>


    </div>
  );
}

export default App;
