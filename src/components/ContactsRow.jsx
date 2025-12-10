function ContactsRow({ contact, onDelete }) {
  return (
    <tr>
      <td>
        <img
          src={contact.pictureUrl}
          alt={contact.name}
          width="80"
          height="80"
          style={{ borderRadius: "50%" }}
        />
      </td>
      <td>{contact.name}</td>
      <td>{contact.popularity.toFixed(2)}</td>
      <td>{contact.wonOscar && "🏆"}</td>
      <td>{contact.wonEmmy && "🌟"}</td>
      <td>
        <button onClick={() => onDelete(contact.id)} className="delete-btn">
          Delete
        </button>
      </td>
    </tr>
  );
}

export default ContactsRow;
