import "./ContactsItem.css";

const ContactsItem = ({
  name,
  pictureUrl,
  popularity,
  id,
  wonOscar,
  wonEmmy,
}) => {
  return (
    <tr className="ContactsItem">
      <td>
        <img src={pictureUrl} alt="..." />
      </td>
      <td>{name}</td>
      <td>{popularity.toFixed(2)}</td>
    </tr>
  );
};

export default ContactsItem;
