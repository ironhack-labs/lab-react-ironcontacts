import React from 'react';
import './App.css';
import Table from './components/Table';
import ContactList from './components/contactList'

function App() {
  console.log("hola");
  return (
    <div className="appDiv">
      <ContactList />
    </div>
  );
}

export default App;

 {/* {contacts.map((item) => {
      <Table
      name={item.name}
       />
    })} */}