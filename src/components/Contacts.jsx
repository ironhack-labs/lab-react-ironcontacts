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
  
const sortByPopularity = () => {
    setContactsArr(prevList => {
    return [...prevList].sort((a,b)=> b.popularity - a.popularity)
  })
  }

const sortByName = () => {
  setContactsArr(prevList => {
    return [...prevList].sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
  });
  };
  
  
const deleteContact = contactName => {
    if (contactName) {
      setContactsArr(contactsArr.filter(contact=>contact.name !==contactName))
    }
  }

  return (
    <div>
      <h1>IronContacts</h1>
      <button className="btn-top" onClick={(event) => addContact(contactsArr)}>Add Random Contact</button> 
      <button className="btn-top" onClick={(event) => sortByPopularity(contactsArr)}>Sort by Popularity</button>
      <button className="btn-top" onClick={(event) => sortByName(contactsArr)}>Sort by Name</button>
      <table>
        <thead>
          <tr>
            <th>PICTURE</th>
            <th>NAME</th>
            <th>POPULARITY</th>
            <th>WON OSCAR</th>
            <th>WON EMMY</th>
            <th></th>
            
          </tr>
        </thead>
        <tbody>
          {contactsArr.map(contact => {
            return (
              <tr className="content-contact">
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
                  {contact.wonOscar ===true?"🏆":"-"}
                </td>
                                <td>
                  {contact.wonEmmy ===true?"🌟":"-"}
                </td>

                <td>
                  <button className="btn-delete" onClick={() => deleteContact(contact.name)}>Delete</button>
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







