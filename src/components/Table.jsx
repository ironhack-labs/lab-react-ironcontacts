function Table(props) {
  const contacts = props.contacts;

  console.log(contacts);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
          {contacts.slice(0, 5).map((contact) => (
            <tr key={contact.id}>
              <td>
                <img src={contact.pictureUrl} alt="picture" />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;

