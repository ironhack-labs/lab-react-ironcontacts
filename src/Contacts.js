import { useState } from "react"
import contactData from "./contacts.json" 
import "./Contacts.css"

export const Contacts = () => {

    const [contact, setContact] = useState(contactData.slice(0,5))
    const [leftContacts, setLeftContacts] = useState(contactData.slice(5))
    const [isAscend, setIsAscend] = useState(true) 

    const addRandomContact = () => {
        
        if (leftContacts.length === 0) return
        const contactCopy = [...contact];
        const leftContactCopy =[...leftContacts];

        const randomIndex = Math.floor(Math.random() * (leftContactCopy.length - 1));
        const randomContact = leftContactCopy.splice(randomIndex, 1);
        
        contactCopy.push(randomContact[0]);

        setLeftContacts(leftContactCopy)
        setContact(contactCopy);    
        
    }
    
    const sortName = () => {

        const sortedContacts = [...contact];


        if(isAscend) {
            sortedContacts.sort((a,b) => a.name.localeCompare(b.name));
        } else {
            sortedContacts.sort((a,b) => b.name.localeCompare(a.name));
        }
        //localeCompare is used only for strings.

        setIsAscend(!isAscend);
            
        setContact(sortedContacts);

    }

    const sortPopularity = () => {
        const sortedContacts = [...contact];
        
        if(isAscend){
            sortedContacts.sort((a, b) => a.popularity === b.popularity ? 0 : a.popularity > b.popularity ? 1 : -1 );
        } else {
            sortedContacts.sort((a,b) => a.popularity === b.popularity ? 0 :a.popularity > b.popularity ? -1 : 1 );
        }
        setIsAscend(!isAscend)
      
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