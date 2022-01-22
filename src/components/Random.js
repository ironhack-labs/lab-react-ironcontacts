import React from 'react';
import DataContacts from '../contacts.json'

const Random = ({ contacts, setContacts }) => {
  
  const addContact = ()=>{
    const randomSelectedContact = DataContacts[Math.floor(Math.random() * DataContacts.length) - 1]
    let checkContact = contacts.includes(randomSelectedContact);
    const newData = [...contacts, randomSelectedContact];
    checkContact ? addContact() :setContacts(newData)
  }

  return (
  <div>
  <button onClick={addContact}>Add Random Contact</button>
  </div>
  );
};

export default Random;
