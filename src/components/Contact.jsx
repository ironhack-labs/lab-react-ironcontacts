import DeleteButton from "./DeleteButton"

const Contact = (props) => {
  const { contactInfo, deleteContact } = props
  
  return contactInfo.map((contact) => {
    const { pictureUrl, name, popularity, wonOscar, wonEmmy, id } = contact
    
    return (
      <tr className="Contact" key={contact.id}>
        <td>
          <img src={pictureUrl} alt="profile-img" />
        </td>
        <td>{name}</td>
        <td>{Number(popularity).toFixed(2)}</td>
        <td>{wonOscar ? "🏆" : ""}</td>
        <td>{wonEmmy ? "🌟" : ""}</td>
        <td><DeleteButton id={id} deleteContact={deleteContact} /></td>
      </tr>
    )
  })
}

export default Contact