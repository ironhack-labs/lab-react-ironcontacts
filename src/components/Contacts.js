import React, {useState} from 'react'
import contactsData from '../contacts.json'
import ContactsCard from './ContactsCard'


/* can create a copy of the array, to use throughout the function i.e. const contactList = [...contacts], instead of doing it each time in the sort functions - would also allow using it for splice */

const first5Contacts = contactsData.splice(0, 5)

    
/* could also use: contactsData.filter((el, index) => index < 5 )
 */

function ContactsList(){
    const [contacts, setContacts] = useState(first5Contacts)

    /* could also do const addContact = () => {}, this is still a function and works exactly the same as the bellow */
    function addContact(){
        /* if (contacts.length === 0) return  - this would be to protect from the array running out and an error occuring*/
        const randomContact = contactsData[(Math.floor(Math.random() * (contactsData.length -1)))];

     /*    could also use a splice method on a copy array in order to make sure contacts do not get repeated... we would need randomContact to be let instead of const, THEN let randomContactsArray = contactList.splice(randomContact, 1)
     let updatedContacts = [...contacts, randomContact[0]] */
        const newContactArray = [...contacts, randomContact]
        setContacts(newContactArray) 
    }


    function sortContactsName(){
        let newContactsArray = [...contacts]
        newContactsArray.sort((a, b)=>{
            if(a.name < b.name) {return -1} 
            if(a.name > b.name) {return 1}
            return 0;
        })
        /* As a substitue for an if/ else statement can have (a.name > b.name ? 1: -1) */
        setContacts(newContactsArray)
    }


    function sortContactsPopularity(){
        let filteredContactsArray = [...contacts]
        filteredContactsArray.sort((a, b)=>{
            return b.popularity-a.popularity
        })
        setContacts(filteredContactsArray)
    }


    function deleteContact(contactId){
        const updatedContactsArray = contacts.filter(contact => contact.id !== contactId)
        setContacts(updatedContactsArray)
    }


    return(
        <div className='List'>
            <h2>ContactsList</h2>
            <button className='btn-add' onClick={()=> addContact()}
            >Add New Contact</button>
            <button className='btn-add' onClick={()=> sortContactsName()}
            >Sort By Name</button>
            {/* if you are passing arguments, you have to use the above technique to pass the function, if not you can pass as onClick={addContacts}, all the above don't need arrow functions but the delete function expects an Id, see ContactsCard */}

            <button className='btn-add' onClick={()=> sortContactsPopularity()}
            >Sort By Popularity</button>
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