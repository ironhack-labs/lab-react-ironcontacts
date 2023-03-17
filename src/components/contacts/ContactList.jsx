import React from 'react'
import ContactItem from './ContactItem'
import contactsJson from '../../contacts.json'

const contacts = contactsJson.slice(0, 5)


export default function ContactList({ contact }) {

  return (
    <table className='table-auto mx-7'>
      <thead>
        <tr>
          <th className='w-16'>Picture</th>
          <th className='w-16'>Name</th>
          <th className='w-16'>Popularity</th>
        </tr>
      </thead>
      <tbody className='text-center'>
        {contacts.map((contact) => (<ContactItem key={contact.id} {...contact} />))}
      </tbody>
    </table>
  )
}
