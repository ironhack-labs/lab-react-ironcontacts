import "./App.css";
import React from "react";
import Contacts from "./contacts.json";
import FamousList from "./Components/ContactsDisplay"

function App() {
  return (
  <div className="App">
      <h1>IRONCONTACTS</h1>
      <FamousList></FamousList>
  </div> 
  )
}
export default App;
