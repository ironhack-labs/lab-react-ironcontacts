function Contact(props) {
  let { picture, name, popularity } = props;
  return (
    <tr>
      <td>{picture}</td>
      <td>{name}</td>
      <td>{popularity}</td>
    </tr>
  );
}

export default Contact;
