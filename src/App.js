import { useState } from "react";
import "./App.css";
import contacts from "./contacts.json";

function App() {
  const [contactList, setContactList] = useState(contacts.slice(0, 5));
  //console.log(contactList.length);
  //maak lijst met overige contacten
  const remainingContactsList = contacts.filter(
    (el) => !contactList.includes(el)
  );

  //console.log(remainingContactsList.length);

  const addContact = () => {
    // kies willekerig contact uit lijst met overige
    const newContact =
      remainingContactsList[Math.floor(Math.random() * contacts.length)];
    console.log(typeof newContact);
    //voeg toe aan contactList
    //const newContactsList = contactList.push(newContact);
    const newContactsList = [...contactList, newContact];

    console.log(newContactsList);
    setContactList(newContactsList);
  };

  //addContact();

  return (
    <div className="App">
      <div>
        <h1>IronContacts</h1>
        <button onClick={addContact}>Add Random Contact</button>
        {contactList.map((contact) => {
          return (
            <table key={contact.id} {...contact}>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>Won Oscar</th>
                <th>Won Emmy</th>
              </tr>
              <tr>
                <td>
                  <img src={contact.pictureUrl} alt="photo" />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>
                  {contact.wonOscar && (
                    <img src="./3d-fluency-trophy.png" alt="Oscar" />
                  )}
                </td>
                <td>
                  {contact.wonEmmy && (
                    <img src="./3d-fluency-trophy.png" alt="Emmy" />
                  )}
                </td>
              </tr>
            </table>
          );
        })}
      </div>
    </div>
  );
}

export default App;
