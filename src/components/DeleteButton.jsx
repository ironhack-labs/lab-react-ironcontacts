function DeleteButton(props) {
  const deleteFunct = () => {
    const filteredContacts = props.contacts.filter((contact) => contact.id !== props.contact.id);
    props.setContacts(filteredContacts)
    }
    

  return (
    <div>
      <button className="deletebut" onClick={deleteFunct}>Delete</button>
    </div>
  );
}

export default DeleteButton;

