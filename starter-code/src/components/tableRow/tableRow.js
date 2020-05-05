import React from 'react'

const TableRow = ({ name, pictureUrl, popularity }) => {
  return (
    <tr>
      <td><img src={pictureUrl} alt=""/></td>
      <td>{name}</td>
      <td>{popularity}</td>
    </tr>
  )
}

export default TableRow
