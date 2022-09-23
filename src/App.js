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
      //Después actualizamos la lista de otros contactos removiendo el contacto random generado, para que no se repita
      setOtherContacts((updatedOtherContacts) => {
        updatedOtherContacts.splice(randomContact, 1);
        return updatedOtherContacts;
      });
    }
  };

  const sortByPopularity = () => {
    //Hace el sort en la lista de contactos actualizados
    setContacts((updatedContacts) => {
      const sortByPop = [...updatedContacts].sort(
        (a, b) => b.popularity - a.popularity
      );
      return sortByPop;
    });
  };

  const sortAlphabetically = () => {
    setContacts((updatedContacts) => {
      const sortAlph = [...updatedContacts].sort((a, b) =>
        a.name > b.name ? 1 : -1
      );
      return sortAlph;
    });
  };

  const deleteContact = (contactId) => {
    // Traer la lista de contactos actualizados
    setContacts((updatedContacts) => {
      // Filtra el contacto de la lista y devuelve una list actualizada
      const updatedList = updatedContacts.filter((contact) => {
        // Devuelve los contactos que no sean iguales que el contacto filtrado
        return contact.id !== contactId;
      });
      return updatedList;
    });
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
        <button onClick={sortByPopularity}>Sort By Popularity</button>
        <button onClick={sortAlphabetically}>Sort Alphabetically</button>
      </div>
      <table>
        <thead>
          <tr>
            <th> Picture</th>
            <th> Name</th>
            <th> Popularity</th>
            <th> Won Oscar</th>
            <th> Won Emmy</th>
            <th> Actions</th>
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
                <td>
                  <button
                    onClick={() => {
                      deleteContact(contact.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
