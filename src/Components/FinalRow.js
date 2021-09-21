import React from "react";
// import '../App.css';

export default function FinalRow({contact, deleteContact}){
    return (
        <tr className="contacts-data" key={contact.id}>
            <td>
                <img src={contact.pictureUrl} alt={contact.name}/>
            </td>
            <td>
                {contact.name}
            </td>
            <td>
                {contact.popularity.toFixed(2)}
            </td>
            <td>
                <button 
                    className='deleteBtn'
                    onClick={() => deleteContact(contact.id)}>Delete</button>
            </td>
        </tr>
    )
}