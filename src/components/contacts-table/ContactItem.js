function ContactItem({name, pictureUrl, id, popularity, wonOscar, wonEmmy}) {
  return(
    <div>
      <tr>
        <td><img src={pictureUrl} alt={name} width="100px" /></td>
        <td><h3>{name}</h3></td>
        <td><h3>{popularity.toFixed(2)}</h3></td>
        <td>{wonOscar ? <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Gold_Cup_icon.svg/1200px-Gold_Cup_icon.svg.png" alt="Oscar" width="5%"/> : "" }</td>
        <td>{wonEmmy ? <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Gold_Cup_icon.svg/1200px-Gold_Cup_icon.svg.png" alt="Emmy" width="5%" /> : "" }</td>
      </tr>
    </div>
  )
}
export default ContactItem
