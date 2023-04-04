import { useState } from "react";
import contactsFromJson from "./contacts.json";
import "./App.css";

function App() {
  const [contactsArr, setContactsArr] = useState(contactsFromJson.slice(0,5));



const randomContacts = () => {
  const remainingContacts = contactsFromJson.filter(contact => !contactsArr.includes(contact));
  const randomObject = [Math.floor(Math.random() * remainingContacts.length)];

    setContactsArr([...contactsArr, remainingContacts[randomObject]], ) ;
  };

  const sortByName = () => {
    const sortedContacts = [...contactsArr].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setContactsArr(sortedContacts);
  };

  const sortByPopularity = () => {
    const sortedContacts = [...contactsArr].sort(
      (a, b) => b.popularity - a.popularity
    );
    setContactsArr(sortedContacts);
  };


  const deleteContact = (contactId) => {
    const filteredContacts = contactsArr.filter((contactObj) => {
      return contactObj.id !== contactId;
    });
    setContactsArr(filteredContacts);
  };
return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={randomContacts}>Add Random Contact</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>
      <button onClick={sortByName}>Sort by name</button>
      <table>
      <thead>
      <tr >
              <th>Picture </th>
              <th> Name</th>
              <th> Popularity </th>
              <th> Won an Oscar </th>
              <th>Won an Emmy </th>
              <th>Actions</th>
            </tr>
            </thead>
            <tbody>

      {contactsArr.map((contactObj) => {
        return (
       
           
            <tr key={contactObj.id}>
              <td>
                <img src={contactObj.pictureUrl} alt={contactObj.name} />
              </td>
              <td>
                <p>{contactObj.name}</p>
              </td>
              <td>
                <p>{contactObj.popularity.toFixed(2)}</p>
              </td>
              <td>
                   { contactObj.wonOscar ? "🏆"  : " "}
              </td>
             
              <td>
              { contactObj.wonEmmy ? "🏆"  : " "}
              </td>

              <td>
                <button onClick={() => deleteContact(contactObj.id)}>Delete</button>
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
