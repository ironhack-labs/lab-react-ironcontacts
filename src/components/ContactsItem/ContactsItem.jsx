import "./ContactsItem.css";
import Button from "../Buttons/Buttons";

const ContactsItem = ({
  id,
  name,
  pictureUrl,
  popularity,
  wonOscar,
  wonEmmy,
  btnAction,
}) => {
  return (
    <tr className="ContactsItem">
      <td>
        <img className="rounded" src={pictureUrl} alt="..." />
      </td>
      <td>{name}</td>
      <td>{popularity.toFixed(2)}</td>
      <td>{wonOscar ? "🏆" : null}</td>
      <td>{wonEmmy ? "🌟" : null}</td>
      <td>
        <Button type="danger" text="Delete" onClick={() => btnAction(id)} />
      </td>
    </tr>
  );
};

export default ContactsItem;
