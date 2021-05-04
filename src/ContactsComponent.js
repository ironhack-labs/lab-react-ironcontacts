import React from 'react';
import './ContactsComponent.css';

function Contacts ({pictureUrl, name, popularity}) {
    return(
        <div>
            <table>
                <tr>
                    <th>{pictureUrl}</th>
                    <th>{name}</th>
                    <th>{popularity}</th>
                </tr>
            </table>
        </div>

    )
}

export default Contacts;

