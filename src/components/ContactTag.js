import "./ContactTag.css";

const ContactTag = ({ pictureUrl, name, popularity, removeContact }) => {
  return (
    <>
    <tr>
      <td><img src={pictureUrl} alt={name} ></img></td>
      <td>{name}</td>
      <td>{popularity}</td>
      <td><button onClick={removeContact}>Delete</button></td>
      
      </tr>
    </>
  );
};

export default ContactTag