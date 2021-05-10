import React from "react";
import contacts from "./contacts.json";
import "./App.css";
// import Contact from "./Components/Contact";

const contactList = contacts.slice(0, 5);

function App() {
  const [contactsArr, setContactsArr] = React.useState(contactList);

  function pickRandom() {
    const randomContact = contacts[Math.floor(Math.random() * contacts.length)];
    const newArr = [randomContact, ...contactsArr];
    setContactsArr(newArr);
  }

  function sortName() {
    const newArr = [...contactsArr].sort((a, b) => {
      return a.name.localeCompare(b.name);
    });

    setContactsArr(newArr);
    console.log("sorted by name", contactsArr);
  }

  function sortPopu() {
    const newArr = [...contactsArr].sort((a, b) => {
      return b.popularity - a.popularity;
    });
    setContactsArr(newArr);

    console.log("sorted by pop", contactsArr);
  }

  function deleteFunc(id) {
    const newArr = contactsArr.filter((contact) => contact.id !== id);
    setContactsArr(newArr);
    console.log("deleted?:", contactsArr);
  }

  return (
    <div>
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={pickRandom}>ADD RANDOM CONTACT</button>
        <button onClick={sortName}>SORT BY NAME</button>
        <button onClick={sortPopu}>SORT BY POP</button>

        <table>
          <thead>
            <tr>
              <th>PICTURE</th>
              <th>NAME</th>
              <th>POPU</th>
            </tr>
          </thead>
          <tbody>
            {contactsArr.map((contact) => {
              return (
                <tr key={contact.id}>
                  <td>
                    <img src={contact.pictureUrl} width="100px" />
                  </td>
                  <td>{contact.name}</td>
                  <td>{Math.round(contact.popularity * 100) / 100}</td>
                  <td>
                    <button onClick={() => deleteFunc(contact.id)}>
                      delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* <Contact {...contact} /> */}
      </div>
    </div>
  );
}

export default App;
