import React from 'react'
import TableRow from './TableRow'

const TableBody = ({ contactsArr }) => (
  <tbody>
    {contactsArr.map((contact, idx) => (
      <TableRow
        key={idx}
        idx={idx}
        deleteContact={() => this.deleteContact(idx)}
        {...contact}
      />
    ))}
  </tbody>
)

export default TableBody
