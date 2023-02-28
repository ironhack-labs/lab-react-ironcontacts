import './App.css'
import contactsArray from '../contacts.json'
import { useState } from 'react'

function App() {

  const arrayCopy = [...contactsArray]

  const startingArray = arrayCopy.splice(0, 5)

  const [randomContact, setRandomContact] = useState(startingArray)



  const addRandomContact = () => {
    const random = contactsArray[Math.floor(Math.random() * contactsArray.length)]
    const newArray = [...randomContact]
    randomContact.includes(random.id) ? addRandomContact() : newArray.push(random)
    setRandomContact(newArray)
  }

  const sortByName = () => {

  }

  const sortByPopularity = () => {

  }

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={addRandomContact}>Add new random contact</button>
      <button onClick={sortByName}>Sort by name</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>
      <table className='Table'>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
          </tr>
        </thead>
        {randomContact.map((elm, idx) => {
          return (
            <tbody key={idx}>
              < tr >
                <td><img src={elm.pictureUrl} alt={elm.name} /></td>
                <td>{elm.name}</td>
                <td>{elm.popularity}</td>
                <td>{elm.wonOscar && "🏆"}</td>
                <td>{elm.wonEmmy && "🏆"}</td>
              </tr>
            </tbody>
          )
        })}
      </table>
    </div >
  )
}

export default App;
