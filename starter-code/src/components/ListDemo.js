import React from 'react';
import Card from './Card';
import contacts from '../contacts.json';

const cincoContacts = contacts.splice(0, 5)


const ListDemo = () =>{
  return (
    
    <tr>
      {cincoContacts.map((contact, index) =>(
        <Card
          key = {index}
          name = {contact.name}
          pictureUrl={contact.pictureUrl}
          popularity = {contact.popularity} />
      ))}
    </tr>
  );
};

export default ListDemo;
