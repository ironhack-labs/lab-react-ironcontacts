import React from 'react';

function OneContact(props) {
    const { oneContact } = props;

    return (
        <tr>
            <td><img src={oneContact.pictureUrl} alt="" width="80" height="100" /></td>
            <td>{oneContact.name}</td>
            <td>{oneContact.popularity}</td>
        </tr>
    )       
}

export default OneContact;
