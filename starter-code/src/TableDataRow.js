import React from 'react';

const TableDataRow = (props) => {
  return(
    <tr>
      <td><img width='70px' src={props.picture} /></td>
      <td>{props.name}</td>
      <td>{props.pop}</td>
    </tr>
  )
}

export default TableDataRow;