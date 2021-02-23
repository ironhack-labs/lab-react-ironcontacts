import Button from "./Button"

const ContactRow = ({ id, pictureUrl, name, popularity, removeFunction }) => (
  <tr>
    <td>
      <img src={pictureUrl} alt={name}></img>
    </td>
    <td>{name}</td>
    <td>{popularity}</td>
    <td>
      <Button className="button" onClick={() => removeFunction(id)}>
        Delete
      </Button>
    </td>
  </tr>
)
export default ContactRow
