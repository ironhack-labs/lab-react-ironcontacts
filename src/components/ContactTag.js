const ContactTag = ({ pictureUrl, name, popularity }) => {
  return (
    <>
    <tr>
      <td>{pictureUrl}</td>
      <td>{name}</td>
      <td>{popularity}</td>
      </tr>
    </>
  );
};

export default ContactTag