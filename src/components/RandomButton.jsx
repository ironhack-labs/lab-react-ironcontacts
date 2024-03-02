function RandomButton(props) {
  const contacts = props.contacts;
  const remainingContacts = props.remainingContacts;
  const setRemainingContacts = props.setRemainingContacts;
  const setContacts = props.setContacts;

  const addRandomContact = () => {
    const randomIndex = Math.floor(Math.random() * remainingContacts.length);
    const randomContact = remainingContacts[randomIndex];
    setContacts([...contacts, randomContact]); // Create a new array with the updated contacts
    setRemainingContacts(remainingContacts.filter((_, index) => index !== randomIndex)); // Create a new array with the remaining contacts
  };

  return (
    <div>
      <button onClick={addRandomContact}>Add Random Contact</button>
    </div>
  );
}

export default RandomButton;