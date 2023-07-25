import Contact from "./Contact"

const ContactList = (props) => {
  const { contacts } = props

  return (
    <div className="ContactList">
      <h2>IronContacts</h2>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
        </tr>
        <Contact contactInfo={contacts} />
      </table>
    </div>
  )
}

export default ContactList