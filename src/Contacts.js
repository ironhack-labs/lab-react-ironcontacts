import React from 'react';
import Contact from './Contact';
import './Contacts.css';



const Contacts = ({ contacts, randomContact, sortPopularity, sortName, deleteContact }) => {
    
  return (
    <table>
      <tr className='tableRow'>
        <th><button onClick={randomContact}>Add Random Contact</button></th>
        <th><button onClick={sortName}>Sort by Name</button></th>
        <th><button onClick={sortPopularity} >Sort by Popularity</button></th>
      </tr>
      <tr className='tableRow title'>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
        <th>Action</th>
      </tr>
      
      {contacts.map(contact => <Contact deleteButton={deleteContact} contact={contact}/>)}
      
    </table>
    
  );
};

export default Contacts;