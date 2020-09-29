import React from "react";
import "./App";

import ContactsList from "./Contacts-list/Contacts-list";

function App() {
  return (
    <>
      <div className="App">
        <h1>Iron Contacts</h1>
        <ContactsList />
      </div>
    </>
  );
}

export default App;
