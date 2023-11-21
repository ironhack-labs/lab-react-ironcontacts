import { useState } from "react"
import "./App.css"
import contacts from "./contacts.json"



function App() {

  const arrayCopy = [...contacts]

  const contactss = arrayCopy.splice(0, 5)

  const [contact, setContact] = useState(contactss)



  const addRandomContact = () => {

    const number = Math.floor(Math.random() * (contacts.length - 0) + 0)

    const randomContact = contacts[number]
    const contactsCopy = [randomContact, ...contact]

    setContact(contactsCopy)

  }

  const sortName = () => {
    const sortCopy = [...contact]
    sortCopy.sort((contact1, contact2) => {
      contact1.name.localeCompare(contact2.name)
    })

    setContact(sortCopy)
  }



  return (

    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <table className="Contacts">
        <button className="btn" onClick={addRandomContact}>New conctac</button>
        <button className="btn" onClick={sortName}>Sort by name</button>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>

        </tr>
        {
          contact.map(elm => {
            return (
              <tr key={elm.id}>
                <th><img src={elm.pictureUrl} style={{ width: '55px', height: '60px' }} /></th>
                <th>{elm.name}</th>
                <th>{elm.popularity}</th>
                <th>{elm.wonOscar ? `🏆` : ""}</th>
                <th>{elm.wonEmmy ? `🌟` : ""}</th>
              </tr>
            )
          })
        }
      </table>

    </div >

  )
}

export default App
