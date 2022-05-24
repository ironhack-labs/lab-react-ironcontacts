function Contacts({ contact, deleteActor }) {
  return contact.map((e) => {
    return (
      <tr key={e.id}>
        <td>
          <img src={e.pictureUrl} alt={e.name} />
        </td>
        <td>
          <p>Name: {e.name}</p>
        </td>
        <td>
          {" "}
          <p>Popularity: {e.popularity.toFixed(2)}</p>
        </td>
        <td>
          {" "}
          {e.wonOscar && (
            <g-emoji
              class='g-emoji'
              alias='trophy'
              fallback-src='https://github.githubassets.com/images/icons/emoji/unicode/1f3c6.png'>
              🏆
            </g-emoji>
          )}
        </td>
        <td>
          {" "}
          {e.wonEmmy && (
            <g-emoji
              class='g-emoji'
              alias='trophy'
              fallback-src='https://github.githubassets.com/images/icons/emoji/unicode/1f3c6.png'>
              🏆
            </g-emoji>
          )}
        </td>
        <td>
          {" "}
          <button onClick={() => deleteActor(e.id)}>Delete</button>
        </td>
      </tr>
    );
  });
}

export default Contacts;
