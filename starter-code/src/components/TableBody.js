import React from 'react'
import TableRow from './TableRow'

const TableBody = ({ contactsArr, deleteContact }) => (
  <tbody>
    {contactsArr.map((contact, idx) => (
      <TableRow
        key={idx}
        idx={idx}
        deleteContact={() => deleteContact(idx)}
        {...contact}
      />
    ))}
  </tbody>
)

export default TableBody
