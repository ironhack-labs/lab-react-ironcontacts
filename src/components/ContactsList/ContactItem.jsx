import oscarIcon from "../../assets/oscar.png";
import emmyIcon from "../../assets/emmy.webp";

const ContactItem = ({ name, popularity, wonOscar, wonEmmy, pictureUrl, onDelete }) => {
  const isOscarAwarded = () => {
    if (wonOscar === true) {
      return <img src={oscarIcon} alt="Trophy" style={{ width: "20px", height: "40px", textAlign: "center", verticalAlign: "middle" }} />;
    } else if (wonOscar === false) {
      return "";
    }
    return "No data";
  };

  const isEmmyAwarded = () => {
    if (wonEmmy === true) {
      return <img src={emmyIcon} alt="Trophy" style={{ width: "25px", height: "40px" }} />;
    } else if (wonEmmy === false) {
      return "";
    }
    return "No data";
  };

  const roundedPopularity = parseFloat(popularity).toFixed(2);

  return (
    <tr>
      <th>
        <img src={pictureUrl} alt={name} style={{ width: "60px", height: "80px" }} />
      </th>
      <td>{name}</td>
      <td>{roundedPopularity}</td>
      <td>{isOscarAwarded()}</td>
      <td>{isEmmyAwarded()}</td>
      <td>
        <button className="btn btn-danger" onClick={onDelete}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ContactItem;
