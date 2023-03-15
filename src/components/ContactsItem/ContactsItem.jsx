import "./ContactsItem.css";

const ContactsItem = ({ name, pictureUrl, popularity, wonOscar, wonEmmy }) => {
  return (
    <tr className="ContactsItem">
      <td>
        <img src={pictureUrl} alt="..." />
      </td>
      <td>{name}</td>
      <td>{popularity.toFixed(2)}</td>
      <td>{wonOscar ? "🏆" : null}</td>
      <td>{wonEmmy ? "🌟" : null}</td>
    </tr>
  );
};

export default ContactsItem;
