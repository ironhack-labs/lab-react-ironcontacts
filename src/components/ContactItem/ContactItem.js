import './ContactItem.css';

const ContactItem = ({ pictureUrl, name, popularity, id, deleteContact, deleteBtnClass }) => {

  return (
    <tr>
      <td><img src={pictureUrl} alt={name} /></td>
      <td>{name}</td>
      <td>{popularity.toFixed(2)}</td>
      <td><button onClick={() => deleteContact(id)} className={deleteBtnClass}>Delete</button></td>
    </tr>
  )
}


export default ContactItem;
