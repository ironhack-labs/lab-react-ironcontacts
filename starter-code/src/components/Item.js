import  React from 'react';

const Item = ({item}) => (
    <tbody>
        <th><img src={item.pictureUrl} alt="imageContact" width="80" height="auto"/></th>
        <th>{item.name}</th>
        <th>{item.popularity}</th>
    </tbody>
);

export  default Item;