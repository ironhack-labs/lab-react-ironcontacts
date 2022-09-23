import "./App.css";
import contactList from "./contacts.json";
import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState(contactList.slice(0, 5));
  const [otherContacts, setOtherContacts] = useState(contactList.slice(5));

  const addRandomContact = () => {
    // Si la lista de otros contactos es mayor que 0
    if (otherContacts.length > 0) {
      //entonces saca un contacto aleatorio de la lista de otros contactos
      const randomContact = Math.floor(Math.random() * otherContacts.length);
      //Y actualiza la lista de contactos con el nuevo contacto random
      setContacts((updatedContacts) => {
        return [...updatedContacts, otherContacts[randomContact]];
      });
      //Después actualizamos la lista de otros contactos removiendo el contacto random generado
      setOtherContacts((updatedOtherContacts) => {
        updatedOtherContacts.splice(randomContact, 1);
        return updatedOtherContacts;
      });
    }
  };

  return (
    <div className="App">
      <h1>Iron Contacts</h1>
      <div>
        <button
          onClick={() => {
            addRandomContact();
          }}
        >
          {" "}
          Add Random Contact
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th> Picture</th>
            <th> Name</th>
            <th> Popularity</th>
            <th> Won Oscar</th>
            <th> Won Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => {
            return (
              <tr key={contact.id}>
                <td>
                  <img
                    style={{ height: "80px" }}
                    src={contact.pictureUrl}
                    alt="hallo"
                  ></img>
                </td>
                <td> {contact.name}</td>
                <td> {contact.popularity}</td>
                <td>{contact.wonOscar ? "🏆" : ""}</td>
                <td>{contact.wonEmmy ? "🏆" : ""}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
