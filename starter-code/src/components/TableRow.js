import React from 'react'
import '../App.css'

const TableRow = ({ pictureUrl, name, popularity, deleteContact, idx }) => {
  const even = { background: '#f3f3f3' }
  const odd = { background: '#fff' }
  return (
    <tr style={idx % 2 === 0 ? even : odd}>
      <td>
        <img src={pictureUrl} alt={name} style={{ height: '200px' }} />
      </td>
      <td>{name}</td>
      <td>{popularity.toFixed(2)}</td>
      <td>
        <button style={{ background: 'tomato' }} onClick={deleteContact}>
          Delete
        </button>
      </td>
    </tr>
  )
}

export default TableRow
