import "./ContactsTable.css"

import Button from "./Button"

const ContactsTable = ({ className, contacts, removeFunction }) => (
  <table className={className}>
    <thead>
      <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {contacts.map(contact => (
        <tr key={contact.id}>
          <td>
            <img src={contact.pictureUrl} alt={contact.name}></img>
          </td>
          <td>{contact.name}</td>
          <td>{contact.popularity}</td>
          <td>
            <Button onClick={() => removeFunction(contact.id)}>Delete</Button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
)

export default ContactsTable
