import React from 'react';

function OneContact(props) {
    const { oneContact } = props;

    return (
        <tr>
            <td><img src={oneContact.pictureUrl} alt="" width="80" height="100" /></td>
            <td className="name">{oneContact.name}</td>
            <td className="pop">{oneContact.popularity}</td>
            <td>
                <button onClick={props.clickToDelete} className="btn-detele">
                    DELETE
                </button>
            </td>
        </tr>
    )       
}

export default OneContact;
