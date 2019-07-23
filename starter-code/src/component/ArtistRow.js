import React from 'react';
import Button from './Button';

const ArtistRow = ({pictureUrl, name, popularity, btnClick}) => {
  return (
   <tr>
    <td><img src={pictureUrl} alt={name}></img></td>
    <td><p>{name}</p></td>
    <td><p>{popularity.toFixed(2)}</p></td>
    <td><Button btnClick={btnClick}>Delete</Button></td>
   </tr> 
  );
}

export default ArtistRow;