import { useState } from "react";
import "./App.css";
import contactsArr from "./contacts.json";

function App() {
  
  let firstFive = contactsArr.slice(0, 5);
  const [contacts, setContacts] = useState(firstFive);

  const remainingContacts = contactsArr.slice(5);

 const addRandom = () => {
 const randomContact = remainingContacts[Math.floor(Math.random() * remainingContacts.length)]
 const copy = [...contacts]
 copy.push(randomContact)
 setContacts(copy)
 }

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      const newList = prevContacts.filter((element) => {
        return element.id !== contactId;
      });

      return newList;
    });

    setContacts( (prevValue) => {
      const copy = [...prevValue]
      copy.sort( () => { } )
      return copy;
  });
  };

  return (
    <div className="App">
      <button onClick={addRandom}>Add random contact</button>
      <div>
        <table>
            <tr>
              <td>IronContacts</td>
            </tr>
            <tr>
              <td>Picture |</td>
              <td>Name |</td>
              <td>Popularity |</td>
              <td>Won an Oscar |</td>
              <td>Won an Emmy</td>
            </tr>
          {contacts.map((contact) => {
            return (
              <tr key={contact.id}>
                <td>
                  <img src={contact.pictureUrl} alt="contact image" />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>{contact.wonOscar && <p>🏆</p>}</td>
                <td>{contact.wonEmmy && <p>🏆</p>}</td>
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
        </table>
      </div>
    </div>
  );
}

export default App;
