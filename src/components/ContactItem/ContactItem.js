import React from 'react';

function ContactItem({id, name, pictureUrl, popularity}) {

    return (
        <div className="contact-item" >
        <table>
            <tr>
                <td><img src={pictureUrl}></img></td>
                <td>{name}</td>
                <td>{popularity}</td>
            </tr>
        </table>
        </div>
    )
}
export default ContactItem;
