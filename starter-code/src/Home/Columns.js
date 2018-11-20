import React from 'react';

const Column = ({contact, index, deleteItem}) => (
    <tr>
        <td><img src={contact.pictureUrl} alt=""/></td>
        <td>{contact.name}</td>
        <td>{contact.popularity}</td>
        <td><button onClick={() => deleteItem(index)}>Eliminar</button></td>
    </tr>
)

export default Column;