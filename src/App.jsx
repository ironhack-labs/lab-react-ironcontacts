import "./App.css"
import contactsData from "./contacts.json"
import { useState } from "react"


const shortList = contactsData.splice(0, 5)


function App() {


  const [contacts, setContact] = useState(shortList)

  const addContact = () => {

    const contactsCopy = [...contacts]

    const randomItem = Math.floor(Math.random() * contactsData.length)
    console.log(contactsData[randomItem])
    contactsCopy.push(contactsData[randomItem])

    setContact(contactsCopy)

  }

  return (

    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <hr />

      <button onClick={addContact}>Add random contact</button>

      <hr />

      <table style={{ width: "900px" }}>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
        </tr>

        {
          contacts.map((elm) => {
            return (
              <tr>
                <td><img src={elm.pictureUrl} alt={elm.name} style={{ width: "100px" }} /></td>
                <td>{elm.name}</td>
                <td>{elm.popularity}</td>
                <td>{elm.wonOscar ? `🏆` : ""}</td>
                <td>{elm.wonEmmy ? `🌟` : ""}</td>
              </tr>
            )
          })
        }
      </table>

      <hr />
    </div>
  )
}

export default App
