import React from 'react';
import './App.css';
import ContactList from './components/contactList'

function App() {
  console.log("hola");
  for(let i = 0; i < 5; i++){
    
  }
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
