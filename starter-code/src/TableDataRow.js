import React from 'react';

const TableDataRow = (props) => {
  console.log(props)
  return(
    <tr>
      <td><img width='70px' src={props.picture} /></td>
      <td>{props.name}</td>
      <td>{props.pop}</td>
      <td><button onClick={() => props.delete(props.idx)}>delete Contacts</button></td>
    </tr>
  )
}

export default TableDataRow;