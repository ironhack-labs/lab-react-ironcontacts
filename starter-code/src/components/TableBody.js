import React from 'react'
import TableRow from './TableRow'

const TableBody = ({ contactsArr }) => (
  <tbody>
    {contactsArr.map((contact, idx) => (
      <TableRow
        key={idx}
        idx={idx}
        picture={contact.pictureUrl}
        name={contact.name}
        popularity={contact.popularity}
        deleteContact={() => this.deleteContact(idx)}
      />
    ))}
  </tbody>
)

export default TableBody
