import './Contact.css'

function Contact({ contact, onDelete }){
  return (
    <tr className="contact">
      <td>
        <img src={contact.pictureUrl} alt={contact.name} />
      </td>
      <td>{contact.name}</td>
      <td>{contact.popularity.toFixed(2)}</td>
      <td>{contact.wonOscar && "🏆"}</td>
      <td>{contact.wonEmmy && "🏆"}</td>
      <td>
        <button onClick={onDelete} className="btn btn-danger">Borrar</button>
      </td>
    </tr>
  );
}

export default Contact;