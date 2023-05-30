import dataContacts from "../contacts.json"
import "./Contacts.css"
import { useState } from "react"

function Contacts() {
  const [contactsArr, setContactsArr] = useState(dataContacts.slice(0, 5))
  
const addContact = (contactsArr) => {
  const randomContact = dataContacts[Math.floor(Math.random() * dataContacts.length)]
  const newContactsArr = [...contactsArr, randomContact]
  setContactsArr(newContactsArr)
}

  return (
    <div>
      <h1>IronContacts</h1>
    <button onClick={(event) => addContact(contactsArr)}>Add Random Contact</button> 
      <table>
        <thead>
          <tr>
            <th>PICTURE</th>
            <th>NAME</th>
            <th>POPULARITY</th>
            <th>WON OSCAR</th>
            <th>WON EMMY</th>
          </tr>
        </thead>
        <tbody>
          {contactsArr.map(contact => {
            return (
              <tr>
                <td>
                  <img className="img-contact" src={contact.pictureUrl} alt={`foto de ${contact.name}`} />
                </td>
                <td>
                  {contact.name}
                </td>
                <td>
                  {contact.popularity.toFixed(2)}
                </td>
                <td>
                  {contact.wonOscar ===true?"🏆":""}
                </td>
                                <td>
                  {contact.wonEmmy ===true?"🌟":""}
                </td>
              
              </tr>
            )
          })}
        </tbody>
      </table>
  </div>
)
}

export default Contacts







