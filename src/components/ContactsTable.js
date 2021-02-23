import "./ContactsTable.css"
import ContactRow from "./ContactRow"
import "bulma/css/bulma.css"
import clsx from "clsx"

const ContactsTable = ({ className, contacts, removeFunction }) => (
  <table className={clsx(className, "table is-striped is-hoverable")}>
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
          key={contact.id}
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
