export const Contact = ({ contact, contacts, setContacts }) => {
  const handleDelete = (contactId) => {
    setContacts(contacts.filter((e) => e.id !== contactId));
  };

  return (
    <div className="card">
      <img src={contact.pictureUrl} />
      <div className="details">
        <h2>{contact.name}</h2>
        <p>Popularity: {contact.popularity}</p>
        {contact.wonOscar && "🏆"}
        {contact.wonEmmy && "🌟"}
        <div>
          <button onClick={() => handleDelete(contact.id)}>Delete</button>
        </div>
      </div>
    </div>
  );
};
