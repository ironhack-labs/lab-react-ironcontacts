import { useState } from 'react';

import contactsData from '../contacts.json';

//Initial render: first 5 contacts
const initContacts = contactsData.slice(0,5);
contactsData.splice(0,5)

function ContactList() {

  const [renderedContacts, setContacts] = useState(initContacts);

  const [sortOrder, setSort] = useState('none');

  const addRandomContact = () => {
    if(!contactsData.length){ console.log('Out of contacts'); return false;}

    const randomContact = Math.floor(Math.random() * (contactsData.length));
    const newRandomContact = [...renderedContacts,contactsData[randomContact]]
    contactsData.splice(randomContact,1)
    setContacts(newRandomContact)
  }

  const sort = sortBy => {
    if(sortBy === 'pop'){
      renderedContacts.sort((a,b)=>a.popularity - b.popularity);
        if(sortOrder === 'pop'){
          renderedContacts.reverse()
          setSort('pop-desc')
        }else{
          setSort('pop')
        }
    }else{
      renderedContacts.sort((a,b)=>a.name.localeCompare(b.name));
        if(sortOrder === 'abc'){
          renderedContacts.reverse()
          setSort('abc-desc')
        }else{
          setSort('abc')
        }      
    }
  }

  const deleteMe = contactId =>{
    const newContacts = renderedContacts.filter(c=>c.id!==contactId);
    setContacts(newContacts)
  }

  return (
    <div className="container">
        <div className="buttons">
            <button onClick={() => addRandomContact()} className="btn-random">
            { contactsData.length ? 'Add Random Contact' : 'Out of contacts'}
            </button>    
            <button onClick={() => sort('pop')} className="btn-sort-pop">
            Sort by popularity
            </button>
            <button onClick={() => sort('abc')} className="btn-sort-abc">
            Sort by name 
            </button>    
        </div>

    <table className="contact-table">
    <thead>
      <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
        <th>Won an Oscar</th>
        <th>Won an Emmy</th>
        <th>Delete</th>
      </tr>
      </thead>
      <tbody>
      {renderedContacts.map(contact=>{
        return <tr key={contact.id}>
          <td><img src={contact.pictureUrl} className="contact-photo" alt={contact.name}></img></td>
          <td>{ contact.name }</td>
          <td>{ contact.popularity.toFixed(2) }</td>
          <td>{ contact.wonOscar && "🏆" }</td>
          <td>{ contact.wonEmmy && "🌟" }</td>
          <td><button onClick={() => deleteMe(contact.id)} className="btn-delete">Delete</button></td>
        </tr>
      })}
      </tbody>
    </table>
    </div>  
  );
}

export default ContactList;