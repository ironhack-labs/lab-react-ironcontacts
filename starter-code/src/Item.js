import React from 'react';

const Item = ({item, deleteItem, index}) => (
    <tr>
        <td> <img src={item.pictureUrl} alt={item.name} /> </td>
        <td>{item.name}</td>
        <td>{item.popularity}</td>
        <td><button onClick={() => deleteItem(index)}>Delete</button></td>
    </tr>

);

export default Item;