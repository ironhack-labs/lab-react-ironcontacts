function ContactRow(props) {
  const { contact } = props;

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
        <button>Delete</button>
      </td>
    </tr>
  );
}

export default ContactRow;
