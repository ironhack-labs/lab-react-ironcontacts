import React, { Fragment } from 'react';

const TableLine = (props) => {
 return (
    <tr key={props.index}>
      <td><img src={props.pictureUrl} alt={props.name} /></td>
      <td>{props.name}</td>
      <td>{props.popularity}</td>
      <button onClick={props.deleteHandler}>Remove</button>
    </tr>
 )
}

export default TableLine
