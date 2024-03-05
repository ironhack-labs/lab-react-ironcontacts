import DeleteButton from "./DeleteButton";

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
            <th>Won <br></br> Oscar</th>
            <th>Won <br></br> Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>
                <img className="profile-picture" src={contact.pictureUrl} alt="picture" />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              <td>{contact.wonOscar ? "🏆" : ""}</td>
              <td>{contact.wonEmmy ? "🌟" : ""}</td>
              <td>
              <DeleteButton contact={contact} setContacts={props.setContacts} contacts={contacts} />
               </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;