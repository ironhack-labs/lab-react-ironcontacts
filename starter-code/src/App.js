import React from "react";
import "./App.css";
import ContactList from "./components/ContactList";
import "mdbootstrap/css/mdb.css";
function App() {
  return (
    <header className="header">
      <ContactList />
    </header>
  );
}

export default App;
