import React, {useState} from 'react'
import contactsData from '../contacts.json'
import ContactsCard from './ContactsCard'



const first5Contacts = contactsData.splice(0, 5)



function ContactsList(){
    const [contacts, setContacts] = useState(first5Contacts)

    function addContact(){
        const randomContact = contactsData[(Math.floor(Math.random() * (contactsData.length -1)))];

     
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

export default ContactsList;