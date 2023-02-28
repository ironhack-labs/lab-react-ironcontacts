import './App.css'
import contacts from "../contacts.json"
import { useState } from 'react'


const App = () => {

  const contactsArray = [...contacts]
  const trimmedContacts = contactsArray.splice(5)

  const [visibleContacts, addNewContact] = useState(contactsArray)

  const addContact = () => {
    const random = Math.floor(Math.random() * trimmedContacts.length - 1)
    const newContact = contactsArray.push(trimmedContacts[random])
    addNewContact(newContact)
  }



  return (
    <div className="App">

      <h1>IronContacs</h1>

      <button onClick={addContact}>Add Random Contact</button>

      <table className='table'>

        <thead>
          <tr>
            <th>Picture</th>

            <th>Name</th>

            <th>Popularity</th>

            <th>Won an Oscar</th>

            <th>Won an Emmy</th>
          </tr>
        </thead>

        <tbody>
          {
            visibleContacts.map(elem => {
              return (
                <tr>

                  <th key={elem._id}>
                    <img src={elem.pictureUrl} alt={elem.name} />
                  </th>

                  <td>{elem.name}</td>

                  <td>{elem.popularity}</td>

                  <td>{elem.wonOscar && '🏆'}</td>

                  <td>{elem.wonEmmy && '🏆'}</td>

                </tr>
              )
            })
          }
        </tbody>

      </table>

    </div>
  )
}

export default App;
