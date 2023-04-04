import { useCallback, useState } from "react";
import "./App.css";
import contactsFromJson from "./contacts.json";



function App() {
  const initialContacts = [...contactsFromJson.slice(0, 5)];
  const [contacts, setContacts] = useState(initialContacts);
  const sort = (type) => {
    if (type === "name") {
      setContacts((preValue) => [
        ...preValue.sort((a, b) => (a.name > b.name ? 1 : -1)),
      ]);
    } else if (type === "popu") {
      setContacts((preValue) => [
        ...preValue.sort((a, b) => (a.popularity > b.popularity ? -1 : 1)),
      ]);
    }
  };

  const addRandom = () => {
    let newContact = contactsFromJson[Math.floor(Math.random() * contactsFromJson.length-1)];
     if((contacts.includes(newContact))){
      addRandom()
     }
     else{
      setContacts((contacts) => [...contacts, newContact]);
     }
      
  };

  const deleteContact = (contactId) => {
    const newList = contacts.filter((element) => element.id !== contactId);
    setContacts(newList);
  };

  return (
    <div className="App">
    <div class="containerButtons">
      <button onClick={addRandom}>Add random contact</button>
      <button onClick={() => sort("name")}>Sort by Name</button>
      <button onClick={() => sort("popu")}>Sort by Popularity</button>
    </div>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Emmy</th>
          <th>Oscar</th>
          <th>Actions</th>
        </tr>
        {contacts.map((element) => {
          return (
            <tr>
              <th>
                <img src={element.pictureUrl} width="150px" />
              </th>
              <th>{element.name}</th>
              <th>{element.popularity}</th>
              <th>{element.wonEmmy && "🏆"}</th>
              <th>{element.wonOscar && "🏆"}</th>
              <th>
                <button onClick={() => deleteContact(element.id)}>
                  Delete
                </button>
              </th>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
export default App;
