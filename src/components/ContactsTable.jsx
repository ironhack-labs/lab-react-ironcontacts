import ContactRow from './ContactsRow';

function ContactsTable({ contacts, onDelete }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact) => (
          <ContactRow 
            key={contact.id} 
            contact={contact} 
            onDelete={onDelete}
          />
        ))}
      </tbody>
    </table>
  )
}

export default ContactsTable
