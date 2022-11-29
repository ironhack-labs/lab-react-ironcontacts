import { useState } from 'react';
import './App.css';
import contacts from './contacts.json'

function App() {
  const contactsArray = contacts.slice(0, 5)
  const [celebrities, setCelebrities] = useState(contactsArray)

  const addContact = () => {

    const contactRandom = contacts.slice(5)
    const randomNumber = Math.floor(Math.random() * contactRandom.length);
    const contactsCopy = [...contactsArray]
    contactsCopy.push(contactsCopy[randomNumber])
    setCelebrities(contactsCopy)
  }

  return (

    <table className='Contacts'>

      <button onClick={addContact}>Add Random Contact</button>
      <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
        <th>Won Oscar</th>
        <th>Won Emmy</th>
      </tr>
      {
        contactsArray.map((elm, idx) => {
          return <tr key={elm.id}>
            <td><img src={elm.pictureUrl}></img></td>
            <td>{elm.name}</td>
            <td> {elm.popularity}</td>
            <td>{elm.wonOscar && '🏆'}</td>
            <td>{elm.wonEmmy && '🏆'}</td>
          </tr>
        })
      }

    </table>


  )
}

export default App;
