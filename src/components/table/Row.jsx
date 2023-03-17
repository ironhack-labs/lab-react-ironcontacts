import oscar from "../../images/oscarAward.png";
import emmy from "../../images/emmyAward.png";

const Row = ({ contact }) => {
  return (
    <tr>
      <td>
        <img src={contact.pictureUrl} alt={contact.name} />
      </td>
      <td>{contact.name}</td>
      <td>{contact.popularity.toFixed(2)}</td>
      {contact.wonOscar ? (
        <td className="award">
          <img src={oscar} alt="Oscar Award" />
        </td>
      ) : (
        <td></td>
      )}
      {contact.wonEmmy ? (
        <td className="award">
          <img src={emmy} alt="Emmy Award" />
        </td>
      ) : (
        <td></td>
      )}
    </tr>
  );
};

export default Row;
