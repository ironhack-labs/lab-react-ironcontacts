function Row({ contact, deleteContact }) {
  return (
    <tr key={contact.id}>
      <td>
        <img src={contact.pictureUrl} alt="" width="100" />
      </td>
      <td>{contact.name}</td>
      <td>{contact.popularity}</td>
      <td>{contact.wonOscar ? "🏆" : ""}</td>
      <td>{contact.wonEmmy && "🌟"}</td>
      <td>
        <button onClick={() => deleteContact(contact.id)}>Delete</button>
      </td>
    </tr>
  );
}

export default Row;
