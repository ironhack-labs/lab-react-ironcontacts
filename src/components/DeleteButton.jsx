function DeleteButton(props) {
  const deleteFunct = () => {
    const deletedContact = props.contacts.find(
      (contact) => contact.id === props.contact.id
    );

    // If the contact is not undefined, delete
    if (deletedContact) {
      // Given previous state, remove the contact
      props.setContacts((prev) =>
        prev.filter((contact) => contact.id !== deletedContact.id)
      );
      // Given previous state, push the contact to the remaining contacts creating a deep copy 
      props.setRemainingContacts((prev) => [...prev, deletedContact]);
    }
  };

  return (
    <div>
      <button className="deletebut" onClick={deleteFunct}>
        Delete
      </button>
    </div>
  );
}

export default DeleteButton;
