import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";


function App() {
let contactsFromJson = contacts;
const [contactsArr, setContactsArr] = useState(contactsFromJson.slice(0, 5));

const addRandomContact = () => {
  const randomNumber = Math.floor(Math.random() * contactsFromJson.length);
  const randomContact = contactsFromJson[randomNumber];

  const contactId = contactsArr.map(() => contactsFromJson.id);
  contactId.includes(randomContact.id) ? addRandomContact() : setContactsArr([...contactsArr, randomContact]);
};

const sortByName = () => {
  const sortedContacts =[...contactsArr].sort((a, b) => (a.name > b.name ? 1 : -1));
  setContactsArr(sortedContacts)
};

const sortByPopularity = () => {
  const sortedContacts = [...contactsArr].sort((a, b) => (a.popularity > b.popularity ? -1 : 1));
  setContactsArr(sortedContacts);
};

  const deleteContact = (contactId) => {
    const newList = contactsArr.filter((contactDetails) => {
      if (contactDetails.id !== contactId) {
        return true;
      } else {
        return false;
      }
    });
    setContactsArr(newList);
  };
  


  
  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={addRandomContact}>Add random contact</button>
      <button onClick={sortByName}>Sort by name</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
          <th>Actions</th>
        </tr>

        {contactsArr.map((contactObj) => {
          return (
            <tr>
              <td>
                {contactObj.pictureUrl ? (
                  <img
                    src={contactObj.pictureUrl}
                    alt={contactObj.title}
                    width="100px"
                  ></img>
                ) : (
                  <img
                    src="https://dummyimage.com/500x750/aaaaaa/000000"
                    alt={contactObj.title}
                  ></img>
                )}
              </td>
              <td>{contactObj.name}</td>
              <td>{contactObj.popularity}</td>
              <td>{contactObj.wonOscar && "🏆"}</td>
              <td>{contactObj.wonEmmy && "🏆"}</td>
              <td>
                <button onClick={() => {deleteContact(contactObj.id);}}>
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default App;
