function ContactsList(props) {
  return (
    <tbody>
      <tr>
        <td>
          <img
            className="contact-img"
            src={props.contacts.pictureUrl}
            alt="image"
          />
        </td>
        <td>{props.contacts.name}</td>
        <td>{props.contacts.popularity.toFixed(2)}</td>
        <td>{props.contacts.wonOscar && "🏆"}</td>
        <td>{props.contacts.wonEmmy && "🏆"}</td>
        <td>
          <button
            className="add-contact-btn"
            onClick={() => {
              {
                console.log(props.contacts.id);
                props.delete(props.contacts.id);
              }
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  );
}

export default ContactsList;
