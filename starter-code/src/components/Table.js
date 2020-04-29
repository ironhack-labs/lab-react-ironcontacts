import React from 'react'
import TableHeader from './TableHeader'
import TableBody from './TableBody'

const Table = ({ contactsArr }) => (
  <table className="table-container">
    <TableHeader />
    <TableBody contactsArr={contactsArr} />
  </table>
)

export default Table
