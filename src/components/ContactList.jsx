import Contact from "./Contact"

const ContactList = (props) => {
  const { contacts } = props

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
          </tr>
        </thead>
        <tbody>
          <Contact contactInfo={contacts} />
        </tbody>
      </table>
    </div>
  )
}

export default ContactList