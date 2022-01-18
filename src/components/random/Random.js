import React from "react";
import './Random.css';
import contactsData from "../../contacts.json";



const Random = ({setContacts, contacts}) =>{
    
    const addContact = () =>{
        const select =  contactsData[Math.floor(Math.random() * contactsData.length)];
        let include = contacts.includes(select);
        const newContacts = [...contacts, select];
        if(include == true){
            addContact();
        } else{
            setContacts(newContacts);
        }
        
    }

    return(
    <div>
    <button onClick ={addContact}>Add Random Contact</button>
    </div>)
}
export default Random;