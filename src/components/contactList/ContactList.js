import { useEffect, useState } from "react";
import contactsJson from '../../contacts.json'

function ContactList() {

  const [contacts, setContacts] = useState([])

  useEffect(() => {
    setContacts(contactsJson.slice(0, 5))
  }, [])

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Picture</th>
            <th scope="col">Name</th>
            <th scope="col">Popularity</th>
            <th scope="col">wonOscar</th>
            <th scope="col">wonEmmy</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => {
            return (
              <tr key={contact.id}>
                <th scope="row">
                  <img src={contact.pictureUrl} />
                </th>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>{contact.wonOscar}</td>
                <td>{contact.wonEmmy}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ContactList