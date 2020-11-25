import Contact from "./Contact"
import contacts from './contacts.json';
import React, { useState } from 'react'

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

  const ContactList = () =>{
      const [contactos, setContactos] = useState(contacts.slice(0,5))

            let random = getRandomInt(0,contacts.length-1)
            let newContact = contacts[random]

            const deleteContact = id => setContactos(
                contactos.filter(el => el.id !== id))
  return <div>
        <button onClick={() => {
            contactos.push(newContact)
            //contactos.push(<Contact key={newContact.id} name={newContact.name} pictureUrl={newContact.name} popularity={newContact.popularity}/>);
            console.log(newContact)
            console.log(contactos)
            setContactos([...contactos], contactos[random])
  
        }}>Add a RandomContact</button>

        <button onClick={() => {
            contactos.sort(function(a,b){
                return (a.name).toString().localeCompare(b.name)
            })
            console.log(contactos)
            setContactos([...contactos])
  
        }}>Sort By Name</button>

        <button onClick={() => {
            contactos.sort(function(a,b){
                return b.popularity - a.popularity
            })
            console.log(contactos)
            setContactos([...contactos])

        //setContactos([...data], rest[randomIndex])
        //rest.splice(randomIndex,1)
  
        }}>Sort By popularity</button>

        <table>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
        {contactos.map(contact => <Contact
        key={contact.id}
        pictureUrl={contact.pictureUrl}
        name={contact.name}
        popularity={contact.popularity}
        handleDelete={() => deleteContact(contact.id)}
        //{...contact}
        />)}
        </table>
      
    </div>
  }

  export default ContactList