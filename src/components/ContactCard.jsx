function ContactCard(props) {
  return (
    <div>
      <table className="table">
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
        <tr>
          <td>
            <img src={props.pictureUrl} alt="contact-picture" width={"100px"} />
          </td>
          <td>{props.name}</td>
          <td>{props.popularity}</td>
        </tr>
      </table>
    </div>
  );
}

export default ContactCard;
