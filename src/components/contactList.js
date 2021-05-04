import React from 'react';
import contacts from "../contacts.json";
import Table from './Table';

const contactsArr = contacts;

function ContactList () {
    const displayContacts = () =>{  
    return contactsArr.map((contacts) => {
        return(
            <Table {...contacts} key={contacts.id} />
        )
    })
    }
    return(
        <div className="table-container">
            {displayContacts()}
        </div>
    )
}

export default ContactList;
