import './App.css'
import { useState } from 'react'
import contacts from './contacts.json'


function App() {

  const contactsCopy = [...contacts]
  const firstFiveContacts = contactsCopy.slice(0,5)
  const remainingContacts = contactsCopy.slice(5)
  
  const [contact, setContact] = useState(firstFiveContacts)


  const getRandomContact = () => {
    const randomContact = remainingContacts[Math.floor(Math.random() * remainingContacts.length)]
    const contactCopy = [...contact]
    contactCopy.push(randomContact)
    setContact(contactCopy)
  }

  const sortByName = () => {

    const sortedCopy = [...contact]
      sortedCopy.sort((a, b) => {
      if (a.name < b.name) {
        return -1
      }
      if (b.name > a.name) {
        return 1
      }
      return 0
    })
    setContact(sortedCopy)
  }

  const sortByPopularity = () => {

    const sortedCopy = [...contact]
      sortedCopy.sort((a, b) => {
      if (a.popularity > b.popularity) {
        return -1
      }
      if (b.popularity < a.popularity) {
        return 1
      }
      return 0
    })
    setContact(sortedCopy)
  }

  const removeContact = idToDelete => {
    const filteredContact = contact.filter(elem => elem.id != idToDelete)
    setContact(filteredContact)
  }

  return (
    <main className="App">
      <h1>IRONCONTACTS</h1>

      <button onClick={getRandomContact}>Add Random Contact</button>
      <button onClick={sortByName}>Sort by Name</button>
      <button onClick={sortByPopularity}>Sort by Popularity</button>

      <table>
        <tbody>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>

          </tr>
            {contact.map(({name, id, pictureUrl, popularity, wonOscar, wonEmmy}) => {
              
              return (
                <tr  key={id}>
                  <td>
                    <img src={pictureUrl} alt="picture" />
                  </td>
                  <td>
                    <p>{name}</p>
                  </td>
                  <td>
                    <p>{popularity.toFixed(2)}</p>
                  </td>
                  <td>
                    {wonOscar && <p>🏆</p>}
                  </td>
                  <td>
                    {wonEmmy && <p>🏆</p>}
                  </td>
                  <td>
                    <button onClick={()=>removeContact(id)}>Delete</button>
                  </td>
                </tr>
              )
            })
          }
    
                </tbody>
    
              </table>
    </main>
  );
}

export default App;
