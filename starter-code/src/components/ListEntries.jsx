import React from 'react';

const ListEntries = (props) => {
  return (
    <tr>
    <td><img src={props.pictureUrl} alt={props.name} style={{height: 100}}/></td>
    <td>{props.name}</td>
    <td>{props.popularity.toFixed(2)}</td>
    <td><button onClick={props.deleteContact}>Delete</button></td>
    </tr>
  )
}

export default ListEntries;