import  React from 'react';

const Item = ({item,action,ind}) => (
    <tr>
        <td><img src={item.pictureUrl} alt="imageContact" width="80" height="auto"/></td>
        <td>{item.name}</td>
        <td>{item.popularity}</td>
        <td><button onClick={() => action(ind)} >Eliminar</button></td>
    </tr>
);

export  default Item;