import Contact from "./Contact"

const ContactList = (props) => {
  const { contacts, deleteContact } = props

  return (
    <div className="ContactList">
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won <br /> Oscar</th>
            <th>Won <br /> Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <Contact contactInfo={contacts} deleteContact={deleteContact}/>
        </tbody>
      </table>
    </div>
  )
}

export default ContactList