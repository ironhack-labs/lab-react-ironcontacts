import React from "react";
import './ContactsTable.css';

const ConcatcsTable = props => {

    return (
        <table className="contacts-container">
            <thead>
                <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Populatirty</th>
                </tr>
            </thead>

            <tbody>
                {props.contacts.map(contact => (
                    <tr className="contact-row" key={contact.id}>
                       <td>
                           <img src={contact.pictureUrl} alt={contact.name}/>
                       </td>

                       <td>
                           {contact.name}
                       </td>

                       <td>
                           {contact.popularity}
                       </td>
                   </tr>
                ))}
            </tbody>
        </table>
    )
}

export default ConcatcsTable