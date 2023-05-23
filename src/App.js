import { useState } from 'react'
import './App.css';
import contacts from './contacts.json'

function App() {

  const contactsB = contacts.slice(0, 5)
  // const contactsRest = contacts.slice(5, contacts.lenght)

  const [contactsArray, setContactsArray] = useState(contactsB)
  const [nameArray, setName] = useState(contactsArray)
  const [popularArray, setPopularity] = useState(contactsArray)

  const addRandom = () => {

    const randomIndex = Math.floor(Math.random() * contacts.length)

    const contactsCopy = [...contactsArray]
    const randomActor = contacts[randomIndex]

    contactsCopy.push(randomActor)
    setContactsArray(contactsCopy)

  }

  const sortByName = () => {

    const contactsCopy = [...contactsArray]
    contactsCopy.sort((a, b) => {

    })
    setName(contactsCopy)

  }

  return (

    <div className="App">
      <header className="App-header">

        <>
          <table>
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

              {contactsArray.map(elm => {
                return (
                  <tr key={elm.id}>
                    <td><img className="actor" src={elm.pictureUrl} alt={elm.name} /></td>
                    <td>{elm.name}</td>
                    <td>{elm.popularity}</td>
                    {elm.wonOscar ? <td>🏆</td> : ' '}
                    {elm.wonEmmy ? <td>🏆</td> : ' '}
                  </tr>
                )
              })}
            </tbody>
          </table>

          <button onClick={addRandom}>Add Random Contact</button>
          <button onClick={sortByName}>Sort by name</button>
        </>




      </header>
    </div>
  );
}

export default App;
