import './App.css';
import contactList from './../contacts.json'
import { useState } from 'react';


function App() {

  const contactArray = contactList.slice(0, 5)

  const [contact, setContacts] = useState(contactArray)


  const addContact = () => {

    const newContact = contactList[Math.floor(Math.random() * contactList.length)]



    const contactCopy = [...contactArray]

    contactCopy.unshift(newContact)

    setContacts(contactCopy)
  }

  return (

    <div className="App">

      <h1>IronContacts</h1>
      <button onClick={addContact}>Add Random Contact</button>

      <table>
        <thead>
          <tr className='picture'>
            <th>Picture</th>
            <th>Picture</th>
            <th>Popularity</th>
            <th className='Oscar'>Won Oscar</th>
            <th className='Emmy'>Won Emmy</th>
          </tr>
        </thead>

        {
          contact.map((elm, idx) => {
            return (
              <tbody>
                <tr className='picture'>
                  <td>
                    <img src={elm.pictureUrl} alt={elm.name} />
                  </td>
                  <td key={idx}>{elm.name}</td>
                  <td>{elm.popularity}</td>
                  <td>{elm.wonOscar && '🏆'}</td>
                  <td>{elm.wonEmmy && '🥇'}</td>
                </tr>
              </tbody>
            )
          })
        }
      </table>
    </div >
  )
}

export default App
