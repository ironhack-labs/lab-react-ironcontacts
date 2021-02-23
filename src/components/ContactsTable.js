import "./ContactsTable.css"

const ContactsTable = ({ className, contacts }) => (
  <table className={className}>
    <thead>
      <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
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
        </tr>
      ))}
    </tbody>
  </table>
)

export default ContactsTable
