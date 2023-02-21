function ContactRow(props) {
  const { contact, callbackFn } = props;

  return (
    <tr>
      <td>
        <img
          src={contact.pictureUrl}
          alt={contact.name}
        ></img>
      </td>
      <td>{contact.name}</td>
      <td>{contact.popularity.toLocaleString("en", { maximumFractionDigits: 2 })}</td>
      <td>{contact.wonOscar ? "🏆" : ""}</td>
      <td>{contact.wonEmmy ? "🌟" : ""}</td>
      <td>
        <button onClick={() => callbackFn(contact.id)}>Delete</button>
      </td>
    </tr>
  );
}

export default ContactRow;
