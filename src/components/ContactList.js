import { useState } from "react";
import contacts from "../contacts.json";
import AddContactBtn from "./AddContactBtn";
import ContactsTable from "./ContactsTable";

function ContactList() {
  const [contactsArr, setContactsArr] = useState(contacts.slice(0, 5));
  const arrLength = contacts.length;

  const addRandContact = () => {
    if (contactsArr.length === arrLength - 1) {
      const theContact = contacts.filter((e) => !contactsArr.includes(e));
      setContactsArr((prevArr) => [theContact[0], ...prevArr]);
    } else {
      const random = Math.floor(Math.random() * arrLength);
      const theContact = contacts[random];
      const found = contactsArr.find((c) => c.id === theContact.id);
      if (found) {
        addRandContact();
      } else {
        setContactsArr((prevArr) => [theContact, ...prevArr]);
      }
    }
  };

  const sortFunct = (criteria) => {
    const arrCopy = [...contactsArr];
    arrCopy.sort((a, b) => {
      if (criteria === "name") {
        let nameA = a[criteria].toLocaleLowerCase(),
          nameB = b[criteria].toLocaleLowerCase();
        return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
      }
      return b.popularity - a.popularity;
    });
    setContactsArr(arrCopy);
  };

  const deleteUpdate = (id) => {
    console.log(id);
    const filtered = contactsArr.filter((e) => id !== e.id);
    setContactsArr(filtered);
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <AddContactBtn
        currentArr={contactsArr.length}
        originalArr={arrLength}
        addRandContact={addRandContact}
      />

      <button onClick={() => sortFunct("name")}>Sort by name</button>
      <button onClick={() => sortFunct("popularity")}>
        Sort by popularity
      </button>

      <ContactsTable list={contactsArr} deleteUpdate={deleteUpdate} />
    </div>
  );
}

export default ContactList;
