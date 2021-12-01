// import { Component } from "react";
import "./App.css";
// import contacts from "./contacts.json";
import ContactList from "./Components/ContactsList";

export function App() {
  return (
    <div className="App">
      <h2>Contacts List</h2>
      <ContactList />
    </div>
  );
}

export default App;
