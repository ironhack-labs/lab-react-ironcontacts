import React from 'react'
import contacts from '../../contacts.json';


function Contacts ({name, popularity, pictureUrl}){
    const fiveContacts = (contacts.slice(0,5))
    return (
        <ul>
         {fiveContacts.map(item=> (
            <li key={item}>
            <h1>{name}</h1>
            <p>{popularity}</p>
            <img src = {pictureUrl} alt='pic' width="350" height="350"/>
            </li>
         ))}
        </ul>
    )
}

export default Contacts