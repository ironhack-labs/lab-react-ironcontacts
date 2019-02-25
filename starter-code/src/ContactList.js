import React from 'react';
import contacts from './contacts.json';

const ContactList = () => {
  const contact5 = contacts.slice(0,5);

  function addRandomContact (contact) {

  }

  return (
    <div>
      <h1>IronContacts</h1>

      <button onClick={addRandomContact}>add Random Contact</button>
      
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {/*comment assigenr une clé à chaque élément de la table?*/}
            {contact5.map(contact => {
              return(
                <tr>
              <td><img className="contact-picture" src={contact.pictureUrl} alt="contact-picture"/></td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
                </tr>

              );
            })}
            
          </tbody>
        </table>

    </div>
  )
};

export default ContactList;

