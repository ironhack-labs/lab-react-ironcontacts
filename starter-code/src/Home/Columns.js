import React from 'react';

const Column = ({contact}) => (
    <tr>
        <td><img src={contact.pictureUrl} alt="picture"/></td>
        <td>{contact.name}</td>
        <td>{contact.popularity}</td>
    </tr>
)

export default Column;