import { useState } from "react"
import contactData from "./contacts.json" 
import "./Contacts.css"

export const Contacts = () => {

    const arr = contactData.slice(0,5)
 
    const [contact, setContact] = useState(arr)

    const addRandomContact = () => {

        const randomIndex = Math.floor(Math.random() * (contactData.length) - 1)
        const randomContact = contactData[randomIndex];    
        const contactCopy = [...contact];
        

        !contactCopy.includes(randomContact) ? contactCopy.push(randomContact) : addRandomContact()
        
        setContact(contactCopy)
        
    }
    
    const sortName = () => {
        const sortedContacts = [...contact];
            sortedContacts.sort((a, b) => a.name===b.name ? (a.name > b.name ? 1 : -1) : (b.name > a.name ? -1 : 1) )
      
        setContact(sortedContacts)
    }

    const sortPopularity = () => {
        const sortedContacts = [...contact];
            sortedContacts.sort((a, b) => a.popularity===b.popularity ? (a.popularity > b.popularity ? 1 : -1) : (b.popularity > a.popularity ? -1 : 1) )
      
        setContact(sortedContacts)
    }

    const deleteContact = (id) => {
        const deletedContact = [...contact].filter(contact => contact.id !== id);

        setContact(deletedContact)
    }
    return(
        <div className="Contacts">
            <h1>IronContacts </h1>

            <button onClick={addRandomContact}>Add Random Contact</button>
            <button type="button" onClick={sortName} >Sort Contacts</button>
            <button type="button" onClick={sortPopularity} >Sort Popularity</button>

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

                   {contact.map(contact =>  
                        <tr key={contact.id}>
                            <td><img src={contact.pictureUrl} alt={contact.name}/></td>
                            <td>{contact.name}</td>
                            <td>{contact.popularity.toFixed(2)}</td>
                            <td><button onClick={() => deleteContact(contact.id)}>Delete</button></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}