import './App.css';
import contactsData from "../contacts.json";
import { useState } from 'react';



function App() {

  const contactsArray = contactsData.slice(0, 5)
  const [contacts, setContacts] = useState(contactsArray)

  const addContact = () => {

    const indexRandom = Math.floor(Math.random() * contactsData.length)
    const newContact = contactsData[indexRandom]
    const contactsCopy = [...contactsArray]
    contactsCopy.unshift(newContact)
    setContacts(contactsCopy)

  }

  const orderName = () => {
    const contactsCopy = [...contacts]
    const contactsOrder = contactsCopy.sort((a, b) => {

      if (a.name < b.name) {
        return -1
      }
      if (a.name > b.name) {
        return 1
      }

    })

    setContacts(contactsOrder)
  }

  const orderPopularity = () => {
    const contactsCopy = [...contacts]

    const orderPopularity = contactsCopy.sort((a, b) => {
      return b.popularity - a.popularity

    })

    setContacts(orderPopularity)

  }


  const deleteContact = idContact => {
    const newContacts = contacts.filter(elm => elm.id != idContact)
    setContacts(newContacts)
  }


  return (
    <div className="App">
      <h1>Lista de contactos</h1>

      <br />
      <button className='btn' onClick={addContact} >Crear Contacto Random</button>
      <br />
      <br />
      <button className='btn' onClick={orderName} >Order by name</button>
      <br />
      <br />
      <button className='btn' onClick={orderPopularity} >Order by popularity</button>
      <br />
      <br />

      <table>
        <thead>
          <tr>
            <th>PICTURE</th>
            <th>NAME</th>
            <th>POPULARITY</th>
            <th>WON OSCAR</th>
            <th>WON EMMY</th>
            <th>ACRIONS</th>
          </tr>
        </thead>
        <tbody>

          {
            contacts.map(({ name, pictureUrl, id, popularity, wonOscar, wonEmmy }) => {

              return (
                <tr key={id}>
                  <td>
                    <img className='pictureImg' src={pictureUrl} alt="" /></td>
                  <td><p>{name}</p></td>
                  <td><p>{popularity}</p></td>
                  <td>{wonOscar ? <p>🏆</p> : <p>D:</p>}</td>
                  <td>{wonEmmy ? <p>🔱</p> : <p>D:</p>}</td>
                  <td>
                    <button className='btn' onClick={() => deleteContact(id)} >Delete</button>
                  </td>
                </tr>
              )

            })
          }

        </tbody>
      </table >

    </div >
  );
}

export default App;
