import "./App.css";
import contactsData from "./contacts.json";
import { useState } from "react";
import Contacts from "./components/Contacts";
function App() {
  const contactsArr = contactsData.slice(0, 5);
  const [contacts, setContacts] = useState(contactsArr);
  console.log(contacts);
  return (
    <div className="App">
      <table>
        <Contacts />
      </table>
    </div>
  );
}

export default App;
