function Contact({ pictureURL, name, popularity, oscar, emmy, deleteContact }) {
  return (
    <tr className="contact">
      <td>
        <img src={pictureURL} alt="portrait" />
      </td>
      <td>{name}</td>
      <td>{popularity}</td>
      <td>{oscar}</td>
      <td>{emmy}</td>
      <td>
        <button className="btn btn-delete" onClick={deleteContact}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default Contact;
