import contactsData from "../contacts.json";
import { useState } from "react";
const Contacts = () => {
  const { contacts, setContacts } = useState(contactsData);
  const deleteContact = (contactId) => {
    const filteredContact = contacts.filter((contact) => {
      return contact.id !== contactId;
    });
    setContacts(filteredContact);
  };
  const number = (num) => num.toFixed(2);
  return (
    <tbody>
      {contacts.map((contato) => {
        return (
          <tr key={contato.id}>
            <td>
              <img src={contato.pictureUrl} alt="imagePerson" />
            </td>
            <td>{contato.name}</td>
            <td>{number(contato.popularity)}</td>
            <td>
              {contato.wonOscar && (
                <img
                  src="https://img.freepik.com/vetores-gratis/taca-das-tacas-de-ouro_1284-18399.jpg"
                  alt="imageTrophy"
                />
              )}
            </td>
            <td>
              {contato.wonEmmy && (
                <img
                  src="https://i.pinimg.com/originals/90/ef/a0/90efa0f3e41a6df63b5581ca4d0372a3.png"
                  alt="imageTrophyEmmy"
                />
              )}
            </td>
            <td>
              <button onClick={() => deleteContact(contato.id)}>Delete</button>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};
export default Contacts;
