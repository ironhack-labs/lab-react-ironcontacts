import React from 'react'

const TableRow = ({ name, pictureUrl, popularity, removeElm }) => {
  return (
    <tr>
      <td><img src={pictureUrl} alt=""/></td>
      <td>{name}</td>
      <td>{popularity}</td>
      <td><button onClick={removeElm}>Delete</button></td>
    </tr>
  )
}

export default TableRow
