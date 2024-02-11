import { useState } from "react";
import "./App.css";
import allContacts from "./contacts.json";

function App() {
  const contacts = allContacts.filter((person, index) => {
    return [index] < 5
  });

  const [contactList, setContactList] = useState(contacts)



  const handleAddContact = () => {
    let remainingContacts = allContacts.slice(5).filter(
      contact => !contactList.some(displayedContact => displayedContact.id === contact.id)
    )

    remainingContacts.length > 0
      ? setContactList(contactList => {
        const randomIndex = Math.floor(Math.random() * remainingContacts.length)
        const randomContact = remainingContacts[randomIndex]

        return [randomContact, ...contactList]
      })
      : console.log("All contacts have been displayed...");
  }

  const deleteContact = (contactId) => {
    const newList = contactList.filter((person) => {
      return person.id !== contactId
    })

    setContactList(newList)
  }

  const sortByPopularity = () => {
    const sortPopularity = [...contactList].sort((a, b) => b.popularity - a.popularity)
    setContactList(sortPopularity)
  }

  const sortByName = () => {
    const sortName = [...contactList].sort((a, b) => a.name.localeCompare(b.name));
    setContactList(sortName)
  }

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={handleAddContact}>Add Random Contact</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>
      <button onClick={sortByName}>Sort by name</button>
      <table >
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>

          {contactList.map((person) => {
            return (
              <tr key={person.id}>
                <td><img width="100px" height="150px" src={person.pictureUrl} /> </td>
                <td>{person.name}</td>
                <td>{Math.round(person.popularity * 100) / 100}</td>
                <td>{person.wonOscar
                  ? "🏆"
                  : " "}</td>
                <td>{person.wonEmmy
                  ? "🌟"
                  : " "}</td>
                <td><button onClick={() => deleteContact(person.id)}>Delete</button></td>
              </tr>
            );
          })}

        </tbody>
      </table>
    </div>
  );
}

export default App;


