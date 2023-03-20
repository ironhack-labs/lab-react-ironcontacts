import { useEffect, useState } from "react";
import contactsJson from '../../contacts.json'

function ContactList({ name, wonOscar, wonEmmy }) {

  const [contacts, setContacts] = useState([])

  useEffect(() => {
    setContacts(contactsJson.slice(0, 5))
  }, [])

  let imageOscar = ''
  let imageEmmy = ''

  if (wonOscar) {
    imageOscar = '🏆'
  }

  if (wonEmmy) {
    imageEmmy = '🏆'
  }

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Picture</th>
            <th scope="col">Name</th>
            <th scope="col">Popularity</th>
            <th scope="col">Won Oscar</th>
            <th scope="col">Won Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => {
            return (
              <tr key={contact.id}>
                <th scope="row">
                  <img src={contact.pictureUrl} alt={name}  />
                </th>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>{imageOscar}</td>
                <td>{imageEmmy}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ContactList