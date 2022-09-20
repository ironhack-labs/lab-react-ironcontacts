function ContactEntry({ contactList, setContactsState }) {

  
  const deleteContact = (id) => {
    const newContact = contactList.filter((contact) => contact.id !== id);
    setContactsState(newContact);
    // console.log(newContact);
  };
  return (
    <>
      {contactList.map((contact) => {
        return (
          <tr key={contact.id}>
            <td>
              <img className="contactImg" src={contact.pictureUrl} alt="" />
            </td>
            <td>{contact.name}</td>
            <td>{contact.popularity}</td>
            <td>{contact.wonOscar ? "🏆" : "💩"}</td>
            <td>{contact.wonEmmy ? "🏆" : "💩"}</td>
            <td>
              <button
                onClick={() => {
                  deleteContact(contact.id);
                }}
              >
                Delete contact
              </button>
            </td>
          </tr>
        );
      })}
    </>
  );
}

export default ContactEntry;
