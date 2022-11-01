import Contacts from "../contacts.json";

function AddRandomContact(props) {
    function handleAddRandomContact() {
    const randomContact = Contacts[Math.floor(Math.random() * Contacts.length)];
    props.handleAddRandomContact(oldContacts => [...oldContacts, randomContact] )
  }

  return (
    <div className="NewContactBtn">
      <button onClick={() => handleAddRandomContact()} className="btn-action"><i class="bi bi-person-plus-fill"></i> Add random contact</button>
    </div>
  );
}

export default AddRandomContact;