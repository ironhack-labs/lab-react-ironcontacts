import contacts from "./contacts.json";
import { useState } from "react";

function App() {
  const [contactsState, setContactsState] = useState(contacts.slice(0, 5));
  const [contactsRemain, setContactsRemain] = useState(contacts.slice(5));
  // console.log("contactsRemain: ", contactsRemain);
  // console.log("contactsState: ", contactsState);

  const clickHandler = () => {
    const randomIndex = Math.floor(Math.random() * contactsRemain.length);
    const newContact = contactsRemain[randomIndex];
    console.log("newContact: ", newContact);
    const newRemain = contactsRemain.filter((contact, index) => {
      return index !== randomIndex;
    });

    setContactsRemain(newRemain);
    setContactsState((prevState) => {
      return [...prevState, newContact];
    });
  };

  return (
    <div className="App">
      <h1>Iron Contacts</h1>
      <button onClick={clickHandler}>Add random contact</button>
      <table id="contactList">
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contactsState.map((contact) => {
            return (
              <tr key={contact.id}>
                <td>
                  <img src={contact.pictureUrl} alt="" />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>{contact.wonOscar && "🏆"}</td>
                <td>{contact.wonEmmy && "🏆"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default App;
