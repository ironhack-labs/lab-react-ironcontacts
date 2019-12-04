import React from 'react';
import './App.css';
import Contactlist from "./components/Contactlist"; 

function App() {
  return (
    <>
      <div className="container margin-top text-center">
        <h1>IronContacts</h1>
        <div className="row">
          <Contactlist />
        </div>
      </div>
    </>
  );
}

export default App;
