import { useState } from "react";
import "./App.css";
import contacts from "./contacts.json";

function App() {
  const [contactList, setContactList] = useState(contacts.slice(0, 4));
  console.log(contactList);
  return (
    <div className="App">
      <div>
        <h1>IronContacts</h1>
        {contactList.map((contact) => {
          return (
            <table key={contact.id} {...contact}>
              <strong>Picture</strong>
              <img src={contact.pictureUrl} alt="photo" />
              <strong>Name</strong>
              <p>{contact.name}</p>
              <strong>Popularity</strong>
              <p>{contact.popularity}</p>
            </table>
          );
        })}
      </div>
    </div>
  );
}

export default App;
