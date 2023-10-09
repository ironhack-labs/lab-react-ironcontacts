import React, { useState } from "react";
import "./App.css";
import contacts from "./contacts.json";
import ListContacts from "./ListContacts.jsx"



function App() {
  return (
    <div className="App">

      <ListContacts 
      contacts = {contacts}/>

    </div>
  );
}

export default App;