import "./ContactItem.css"

function ContactItem ({ number, pictureUrl, name, popularity, onDelete, wonOscar, wonEmmy }) {
  return (
    //<tr className={rating >= 8 ? 'table-warning' : ''}>
    <tr>
      <th scope="row">{number}</th>
      <td><img src={pictureUrl} className="picture" alt="pic"/></td>
      <td>{name}</td>
      <td>{popularity}</td>
      <td>{wonOscar ?  "🏆" : ''}</td>
      <td>{wonEmmy ? '🏆' : ''}</td>
      {/* <td>{rating}</td>  */}
      <td><button onClick={onDelete} className="btn btn-danger">Delete</button></td>
  </tr>
  )
}

export default ContactItem