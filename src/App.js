import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react"

function App() {
  const [contacts, setContacts] = useState(contacts.slice(0, 5));

  return <div className="App"></div>;
}
export default App;
