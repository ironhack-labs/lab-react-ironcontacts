
function ContactList({ contactList, onSortByName, onSortByPopularity, onDeleteContact }) {
  return (
    <div>
      <button onClick={onSortByName}>Sort by Name</button>
      <button onClick={onSortByPopularity}>Sort by Popularity</button>
      <table className="card m-5">
        <thead className=" d-flex justify-content-between">
          <tr>
           <h5>A continuación encontrarás una lista de los personajes de los que poseemos su contacto y su nivel de popularidad</h5> 
          </tr>
        </thead>
        <tbody className="card m-5">
          {contactList.map((contact) => (
            <tr key={contact.id} className="card m-5">
              <td>
                <img src={contact.pictureUrl} alt={contact.name} />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              <td>{contact.wonOscar ? '🏆' : ''}</td>
              <td>{contact.wonEmmy ? '🏆' : ''}</td>
              <td>
                <button onClick={() => onDeleteContact(contact.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ContactList;