import React from "react";


const Remove = ({setContacts, contacts}) => {

    const RemoveContact =(id) =>{
       
        const filteredContacts = contacts.filter((contact) => contact.id !== id)
        const newContactsDelete = [...contacts, filteredContacts];
        return setContacts(newContactsDelete) ;
        
    }


    return(
        <div>{RemoveContact}</div>
        )
}
export default Remove;