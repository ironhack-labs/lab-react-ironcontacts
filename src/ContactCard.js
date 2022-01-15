import DeleteButton from "./DeleteButton"

const ContactCard = ({name, pictureUrl, popularity, id, onDelete}) => {
  return (
      <>
        <td>
          <img src={pictureUrl} alt="actor" className="actor-pic"/>
        </td>
        <td>{name}</td>
        <td>{popularity}</td>
        <td><DeleteButton onDelete={onDelete} id={id} /></td>
      </>
  )
}
export default ContactCard