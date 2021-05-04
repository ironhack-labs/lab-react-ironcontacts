import React from 'react';
import

function ContactItem({id, name, pictureUrl, popularity, removeItem}) {

    return (
        <div className="contact-item" >
        <table>
            <tr>
                <td><img src={pictureUrl}></img></td>
                <td>{name}</td>
                <td>{popularity}</td>
                <td><button onClick={removeItem}>Remove</button></td>
            </tr>
        </table>
        </div>
    )
}
export default ContactItem;
