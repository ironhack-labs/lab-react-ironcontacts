import React from 'react';

const Item = ({item}) => (
    <tr>
        <td> <img src={item.pictureUrl} alt={item.name} /> </td>
        <td>{item.name}</td>
        <td>{item.popularity}</td>
    </tr>

);

export default Item;