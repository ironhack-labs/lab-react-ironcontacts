import "./ContactsTable.css"

import ContactRow from "./ContactRow"

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
        <ContactRow
          id={contact.id}
          pictureUrl={contact.pictureUrl}
          name={contact.name}
          popularity={contact.popularity}
          removeFunction={removeFunction}
        />
      ))}
    </tbody>
  </table>
)

export default ContactsTable
