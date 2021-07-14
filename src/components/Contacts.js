import React, {useState} from 'react'
import contactsData from '../contacts.json'
import ContactsCard from './ContactsCard'

const first5Contacts = contactsData.splice(0, 5)
const shuffledData = contactsData[Math.floor(Math.random() * contactsData.length)];
    


function ContactsList(){
    const [contacts, setContacts] = useState(first5Contacts)

    
    function addContact(){
        const newContactArray = contacts.unshift(shuffledData)
        setContacts(newContactArray)
    }




    function deleteContact(contactId){
        const updatedContactsArray = contacts.filter(contact => contact.id !== contactId)
        setContacts(updatedContactsArray)
    }


    return(
        <div className='List'>
            <h2>ContactsList</h2>
            <table>
                <thead>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact, id) => {
                    return (
                    <ContactsCard key={id} contact={contact} handleDelete={deleteContact}/>
                    )
                    })}
                </tbody>
            </table>     
        </div>
    )
}



export default ContactsList