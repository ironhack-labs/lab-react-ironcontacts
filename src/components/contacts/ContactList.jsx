import React from 'react'
import ContactItem from './ContactItem'


export default function ContactList({ contacts }) {

  return (
    <table className='table-auto mx-7'>
      <thead>
        <tr>
          <th className='w-16'>Picture</th>
          <th className='w-16'>Name</th>
          <th className='w-16'>Popularity</th>
          <th className='w-16'>Won Oscar</th>
          <th className='w-16'>Won Emmy</th>
        </tr>
      </thead>
      <tbody className='text-center'>
        {contacts.map((contact) => (<ContactItem key={contact.id} {...contact} />))}
      </tbody>
    </table>
  )
}
