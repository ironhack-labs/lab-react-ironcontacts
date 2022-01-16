import React from 'react';
import "./ContactsList.css"
import contactsData from "../../contacts.json" 
import {useState} from 'react';
import Random from '../random/Random';
import Sort from '../sort/Sort';
import SortPopularity from '../../sortpopularity/SortPopularity';

let fiveContacts = contactsData.slice(0,5);

const ContactsList = ({name, pictureUrl, popularity, id}) =>{
    const [contacts, setContacts] = useState(fiveContacts);
 return(
   <div>
   <Random setContacts = {setContacts} contacts = {contacts}/>
   <Sort setContacts = {setContacts} contacts = {contacts}/>
   <SortPopularity setContacts = {setContacts} contacts = {contacts}/>
    <table key={id}>
    <thead className='head'>
    <tr className='title' >
      <th><h1>Picture</h1></th>
      <th><h1>Name</h1></th>
      <th><h1>Popularity</h1></th>
    </tr>
    </thead>
    {/* <tr>
      <td><img src={pictureUrl} alt="" /></td>
      <td>{name}</td>
      <td>{popularity}</td>

    </tr> */}

    {contacts.map((contact) => {
        return (
          <tbody key={contact.id}>
            <tr>
                <td><img className='picture' src={contact.pictureUrl} alt="" /></td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
   
            </tr> 
            </tbody>
            
        )
        })}
  </table>
  </div>
 )
}
export default ContactsList;