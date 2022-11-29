import { useState } from 'react'
import contactsArray from './contacts.json'
import './App.css'





const App = () => {

  const [contacts, setContacts] = useState(contactsArray)

  //   const sortByName = () => {
  //     const sortedContactsByName = [...contactsArray].sort((a, b) => {
  //       return a.name > b.name ? 1 : -1
  //     })
  //     setContacts(sortedContactsByName)
  //   }
  // }

  const sortByPopularity = () => {
    const sortedContacts = [...contactsArray].sort((a, b) => {
      return b.popularity > a.popularity ? 1 : -1
    })
    setContacts(sortedContacts)
  }

  const addContacts = () => {
    const randomContact = contactsArray[Math.floor(Math.random() * contactsArray.length)]
    contactsSlice.unshift(randomContact)
    setContacts(contactsSlice)
  }

  let contactsSlice = contacts.slice(0, 5)


  return (
    <>
      <button onClick={addContacts}>Add Contacts</button>
      <button onClick={sortByPopularity}>Sort By Popularity</button>
      {/* <button onClick={sortByName}>Sort By Name</button> */}
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>

        {
          contactsSlice.map((elm) => {
            return (
              <tbody key={elm.id} >
                <tr>
                  <td><img src={elm.pictureUrl} className="picture" /></td>
                  <td><h3>{elm.name}</h3></td>
                  <td><h5>{elm.popularity.toFixed(2)}</h5></td>
                  <td>{elm.wonOscar ? <h5>Si tuvo Oscar</h5> : <h5>No tuvo Oscar</h5>}</td>
                  <td>{elm.wonEmmy ? <h5>Si tuvo Emmy</h5> : <h5>No tuvo Emmy</h5>}</td>
                </tr>
              </tbody>

            )
          })
        }
      </table>
    </>
  )
}



export default App;
