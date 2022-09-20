import {useState} from "react";
function ContactEntry({ contactList }) {

  const [initContact, setInitContact] = useState(contactList);
  
  const deleteContact = (id) => {
    const newContact = initContact.filter((contact) => contact.id !== id);
    setInitContact(newContact);
    // console.log(newContact);
  };
  return (
    <>
      {initContact.map((contact) => {
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
