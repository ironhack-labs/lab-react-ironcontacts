import { Component } from "react";
import contactList from './contacts.json'

const Button = ({addContact, sortName, sortPopularity, deleteContact}) => {

    return (
        <button 
            onClick={addContact || sortName || sortPopularity || deleteContact}
        >
            {addContact && <span>Add Random Contact</span>}
            {sortName && <span>Sort by name</span>}
            {sortPopularity && <span>Sort by popularity</span>}            
            {deleteContact && <span>Delete</span>}            
        </button>
    )
}

export default Button;