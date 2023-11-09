import "./App.css";
import array from "./contacts.json"
import { useState } from "react";

function App() {

  const [contacts, displayContacts] = useState(array)
  const newArray = contacts.slice(0,5)

  return (
    <>
    {newArray}
    <div className="App">
      <h1>LAB | React IronContacts</h1>
    </div>
    </>
    );
}

export default App;
