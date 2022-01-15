import DeleteButton from "./DeleteButton"

const ContactCard = ({name, pictureUrl, popularity, id}) => {
  return (
      <>
        <td>
          <img src={pictureUrl} alt="actor" className="actor-pic"/>
        </td>
        <td>{name}</td>
        <td>{popularity}</td>
        <td><DeleteButton/></td>
      </>
  )
}
export default ContactCard