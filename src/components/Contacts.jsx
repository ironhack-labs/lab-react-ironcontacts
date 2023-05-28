import dataContacts from "../contacts.json"
import "./Contacts.css"

const contactsArr = dataContacts.slice(0,5)
console.log(contactsArr)

function Contacts() {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>PICTURE</th>
            <th>NAME</th>
            <th>POPULARITY</th>
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
              
              </tr>
            )
          })}
        </tbody>
      </table>
  </div>
)
}

export default Contacts







