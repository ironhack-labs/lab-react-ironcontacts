const Contact = ({ contact, removeContact }) => {
  const { name, pictureUrl, popularity, id, wonOscar, wonEmmy } = contact;
  return (
    <tr>
      <td>
        <img
          src={pictureUrl}
          alt={`Picture of ${name}`}
          className="img-contact"
        />
      </td>
      <td>{name}</td>
      <td className="text-center">{popularity.toFixed(2)}</td>
      <td className="text-center">{wonOscar ? "🏆" : null}</td>
      <td className="text-center">{wonEmmy ? "🌟" : null}</td>
      <td>
        <button onClick={() => removeContact(id)} className="btn btn-danger">
          Delete
        </button>
      </td>
    </tr>
  );
};

Contact.defaultProps = {
  contact: {},
  removeContact: () => {},
};

export default Contact;
