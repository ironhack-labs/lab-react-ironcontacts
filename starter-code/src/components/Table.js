import React from 'react'
import TableHeader from './TableHeader'
import TableBody from './TableBody'

const Table = ({ contactsArr, deleteContact }) => (
  <table className="table-container">
    <TableHeader />
    <TableBody contactsArr={contactsArr} deleteContact={deleteContact} />
  </table>
)

export default Table
