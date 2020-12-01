const ContactsCard = ({ pictureUrl, name, popularity, id, removeContact }) => {

    return (
        <tr key={id}>
          <td><img className="img" src={pictureUrl} alt={name} /> </td>
          <td className="name"><span>{name}</span></td>
          <td className="popularity"><span>{popularity.toFixed(2)}</span></td>
          <td> <button onClick = {removeContact}>Delete contact</button></td>
        </tr>
    
      )
}

export default ContactsCard

