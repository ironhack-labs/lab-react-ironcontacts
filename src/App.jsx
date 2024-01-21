import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import contact from "./contacts.json";

// no components recommendation

function App() {
  const [contacts, setContacts] = useState(contact.slice(0, 5));
  const [remainingContacts, setremainingContacts] = useState(contact.slice(5));
  // console.log(contacts, "contacts initially");
  //console.log(remainingContacts, "remaining contacts initially")

  function addContact() {
    if (remainingContacts.length) {
      const addedContacts = [...contacts];
      //console.log(addedContacts, "addedcontacts");
      let randomIndex = Math.floor(Math.random() * remainingContacts.length);
      let randomContact = remainingContacts[randomIndex];
      addedContacts.push(randomContact);
      setContacts(addedContacts);

      const remainingContactsAfterRandomAdd = [...remainingContacts];
      remainingContactsAfterRandomAdd.splice(randomIndex, 1);
      setremainingContacts(remainingContactsAfterRandomAdd);
      //console.log(remainingContactsAfterRandomAdd, "remaining after add");
    }
  }

  function sortPopularity() {
    let contactsToSort = [...contacts];
    contactsToSort.sort((a, b) => {
      //console.log(a.popularity, b.popularity)
      if (a.popularity > b.popularity) {
        return -1;
      }
      if (a.popularity === b.popularity) {
        return 0;
      }
      return 1;
    });
    //console.log(contactsToSort, "contact to sort")
    setContacts(contactsToSort);
  }

  function sortName() {
    let contactsToSort = [...contacts]
    contactsToSort.sort((a,b)=> {
      let localecompare = a.name.localeCompare(b.name)
      return localecompare
    })
      setContacts(contactsToSort)

    }

    function deleteActor(contactId) {
      const contactsAfterRemove = [...contacts]
      const contactIndex = contacts.findIndex((contact_)=> {
        return contactId === contact_.id
      })
      contactsAfterRemove.splice(contactIndex, 1)
      setContacts(contactsAfterRemove)     
       
    }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th colSpan="5">Ironcontacts</th>
          </tr>
          <tr colSpan="5">
            <td>
              <button onClick={addContact}>Add Random Contact</button>
            </td>
            <td>
              <button onClick={sortPopularity}>Sort by popularity</button>
            </td>
            <td>
              <button onClick={sortName}>Sort by name</button>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>Actions</th>
          </tr>
          {contacts.map((contact) => {
            return (
              <tr key={contact.id}>
                <td>
                  <img
                    src={contact.pictureUrl}
                    alt="Actor-image"
                    height={100}
                  ></img>
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                <td> {contact.wonOscar && "🏆"}</td>
                <td> {contact.wonEmmy && "🌟"}</td>
                <td><button onClick={()=> {
                  const contactId = contact.id
                  deleteActor(contactId)      
                   
                }}>Delete</button>
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
