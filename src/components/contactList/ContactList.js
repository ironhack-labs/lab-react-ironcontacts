import { useEffect, useState } from "react";
import contactsJson from '../../contacts.json'

function ContactList() {

  const [contacts, setContacts] = useState([])

  useEffect(() => {
    setContacts(contactsJson.slice(0, 5))
  }, [])

  function wonOscar(contact) {
    if (contact.wonOscar) {
      return "🏆";
    } else {
      return "❌";
    }
  };

  function wonEmmy(contact) {
    if (contact.wonEmmy) {
      return "🏆";
    } else {
      return "❌";
    }
  };

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
                  <img src={contact.pictureUrl} />
                </th>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>{wonOscar(contact)}</td>
                <td>{wonEmmy(contact)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ContactList