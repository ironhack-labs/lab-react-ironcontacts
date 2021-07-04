import './contacts.css'
import contacts from "../contacts.json";
import React, {useState} from 'react'
import { indexOf } from 'lodash';


function MyContacts(){
    /* const {item1, item2, item3, item4, item5} = contacts  */
    const firstsContacts = contacts.slice(0, 5)
    const [prevContacts, setContact] = useState(firstsContacts)

    function addContact(){
        const newContact = (contacts[Math.floor(Math.random() * contacts.length)])
        /* if(prevContacts.map(item => item.id === newContact.id)){
            console.log('NEW CONTACT')
        } */
        setContact(prevContacts => {
            
            return [...prevContacts, newContact]
        })
    }

    function sortName(){
        console.log('in sort by name')
        const sortByName = prevContacts.sort(function(a, b) {
                const nameA = a.name.toUpperCase(); // ignore upper and lowercase
                const nameB = b.name.toUpperCase(); // ignore upper and lowercase
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
            });
        setContact(prevContacts => {
        
            return [...sortByName]
        })
    }

    function sortPopularity(){
        console.log('in sort by popularity')
        const sortByPopularity = prevContacts.sort(function(a, b) {
            return b.popularity - a.popularity;
        });

        setContact(prevContacts => {
            return [...sortByPopularity]
        })
    }

    function deleteContact(idToDelete){
        console.log('delete contact', idToDelete)

        const deletedContacts = prevContacts.filter(contact => contact.id !== idToDelete);

        setContact(prevContacts => {
            return [...deletedContacts]
        }) 

    }

    return(
        <div>
            <h2><b>IronContacts</b></h2>
            <button onClick={addContact}>Add Random Contact</button>
            <button onClick={sortName}>Sort By Name</button>
            <button onClick={sortPopularity}>Sort By Popularity</button>
    
            <table>
                
                <tbody>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                        <th>Action</th>
                        
                    </tr>
                    {prevContacts.map(item =>(
                    <tr key={item.id}>
                        <td><img className= "pictureUrl" src={item.pictureUrl}></img></td>
                        <td>{item.name}</td>
                        <td>{Math.floor((item.popularity)*100)/100}</td>
                        <td><button onClick={() => deleteContact(item.id)}>Delete</button></td>
                    </tr>
                    ))}
                </tbody>
                 
            </table>
    </div>
    
    )
}

export default MyContacts;