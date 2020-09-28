import React from 'react';

const TableRow = (props) => {
  const handleClick = () =>{
    props.delete(props.contact)

  }
  
  return (
    <tr key={props.contact.key}>
    <td>
      <img style={{ width: '100px' }} src={props.contact.pictureUrl} alt="" />
    </td>
    <td>{props.contact.name}</td>
    <td>{props.contact.popularity.toFixed(2)}</td>
    <td>
      <button onClick={handleClick}>Delete</button>
    </td>
  </tr>

  )

  
};

export default TableRow;
