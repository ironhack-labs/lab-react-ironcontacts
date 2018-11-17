import React from 'react';
import Button from './Button';

const Item = ({item, index, onClick}) => (
  <tr>
    <td>
      <img src={item.pictureUrl} alt={item.name} height="100" />
    </td>
    <td>{item.name}</td>
    <td>{item.popularity}</td>
    <td><Button onClick={ () => onClick(index) }>Delete</Button></td>
  </tr>
  
);

export default Item;