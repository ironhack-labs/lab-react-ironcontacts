import React from 'react'

const TableRow = ({ picture, name, popularity }) => (
  <tr>
    <td>
      <img src={picture} alt={name} style={{ height: '200px' }} />
    </td>
    <td>{name}</td>
    <td>{popularity}</td>
  </tr>
)

export default TableRow
