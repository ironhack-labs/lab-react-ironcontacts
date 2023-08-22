import { useState } from 'react'
import "./App.css"
import contactsArray from './contacts.json'

function App() {

  // new array with 5 contacts 

  const [contacts, setContacts] = useState(contactsArray)

  const newArray = contacts.filter((contact, index) => index < 5);


  // add a contact button 

  const addContact = () => {

    let random = []

    random = Math.floor(Math.random() * (contactsArray.length - 4 + 1) + 0)

    const newContact = { name: contactsArray[random].name, pictureUrl: contactsArray[random].pictureUrl, popularity: contactsArray[random].popularity, id: contactsArray[random].id, wonOscar: contactsArray[random].wonOscar, wonEmmy: contactsArray[random].wonEmmy }

    let contactCopy = [...contacts]

    contactCopy.unshift(newContact)

    setContacts(contactCopy)

  }

  // sort by name button 

  const sortByName = () => {

    newArray.sort((a, b) => a.name.localeCompare(b.name))

    setContacts(newArray)

  }

  // sort by popularity button 

  const sortByPopularity = () => {

    alert('test')

    // let contactCopy = [...contacts]

    // contactCopy.sort((a, b) => a.popularity.localeCompare(b.popularity))

    // setContacts(contactCopy)

  }

  // delete button 

  const deleteContact = contactId => {

    const updateContacts = contacts.filter((elm) => elm.id != contactId)

    setContacts(updateContacts)

  }

  return (

    <>

      {

        <div className="App">

          <h1>LAB | React IronContacts</h1>

          <button className="button" onClick={addContact} > Add new contact </button>

          <button className="button" onClick={sortByName} > Sort by name </button>

          <button className="button" onClick={sortByPopularity}> Sort by popularity </button>

          <table>
            <thead>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>Won an Oscar</th>
                <th>Won an Emmy</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>

              <tr>
                <td><img src={newArray[0].pictureUrl} alt={newArray[0].name} style={{ width: "50px" }} /></td>
                <td>{newArray[0].name}</td>
                <td>{newArray[0].popularity}</td>
                <td>{newArray[0].wonOscar ? <p>🏆</p> : <p> </p>} </td>
                <td>{newArray[0].wonEmmy ? <p>🏆</p> : <p> </p>} </td>
                <td>
                  <button className="button" onClick={() => deleteContact(newArray[0].id)}> Delete </button>
                </td>
              </tr>

              <tr>
                <td><img src={newArray[1].pictureUrl} alt={newArray[1].name} style={{ width: "50px" }} /></td>
                <td>{newArray[1].name}</td>
                <td>{newArray[1].popularity}</td>
                <td>{newArray[1].wonOscar ? <p>🏆</p> : <p> </p>} </td>
                <td>{newArray[1].wonEmmy ? <p>🏆</p> : <p> </p>} </td>
                <td>
                  <button className="button" onClick={() => deleteContact(newArray[1].id)}> Delete </button>
                </td>
              </tr>

              <tr>
                <td><img src={newArray[2].pictureUrl} alt={newArray[2].name} style={{ width: "50px" }} /></td>
                <td>{newArray[2].name}</td>
                <td>{newArray[2].popularity}</td>
                <td>{newArray[2].wonOscar ? <p>🏆</p> : <p> </p>} </td>
                <td>{newArray[2].wonEmmy ? <p>🏆</p> : <p> </p>} </td>
                <td>
                  <button className="button" onClick={() => deleteContact(newArray[2].id)}> Delete </button>
                </td>
              </tr>

              <tr>
                <td><img src={newArray[3].pictureUrl} alt={newArray[3].name} style={{ width: "50px" }} /></td>
                <td>{newArray[3].name}</td>
                <td>{newArray[3].popularity}</td>
                <td>{newArray[3].wonOscar ? <p>🏆</p> : <p> </p>} </td>
                <td>{newArray[3].wonEmmy ? <p>🏆</p> : <p> </p>} </td>
                <td>
                  <button className="button" onClick={() => deleteContact(newArray[3].id)}> Delete </button>
                </td>
              </tr>

              <tr>
                <td><img src={newArray[4].pictureUrl} alt={newArray[4].name} style={{ width: "50px" }} /></td>
                <td>{newArray[4].name}</td>
                <td>{newArray[4].popularity}</td>
                <td>{newArray[4].wonOscar ? <p>🏆</p> : <p> </p>} </td>
                <td>{newArray[4].wonEmmy ? <p>🏆</p> : <p> </p>} </td>
                <td>
                  <button className="button" onClick={() => deleteContact(newArray[4].id)}> Delete </button>
                </td>

              </tr>


            </tbody>
          </table>

        </div>

      }

    </>

  )

}

export default App;
