import React from 'react';
import './row.css';
import Button from '../Button/Button'

function Row({picture,name,popularity,deleteContact,idx}) {
    
  return (
      <tr>
        <td className='columns'><img src={picture} alt='1' className='profilePic'/></td>
        <td className='columns'><p className='name'>{name}</p></td>
        <td className='columns'><p>{popularity.toFixed(2)}</p></td>    
        <td className='columns'><Button method={function(){deleteContact(idx)}}>Delete</Button></td>    
    </tr>
  );
}

export default Row;
