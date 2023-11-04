function ActorsListTile(props) {
  let roundPopularity = Math.round(props.contact.popularity * 100) / 100;

  return (
    <tr>
      <td>
        <img
          className="img-actor"
          src={props.contact.pictureUrl}
          alt={props.contact.name}
        />
      </td>
      <td>{props.contact.name}</td>
      <td>{roundPopularity}</td>
      <td>{props.contact.wonOscar ? "🏆" : ""}</td>
      <td>{props.contact.wonEmmy ? "🌟" : ""}</td>
      <td>
        <button onClick={() => props.deleteContactById(props.contact.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default ActorsListTile;
