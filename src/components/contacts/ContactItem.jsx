import React from 'react'

export default function ContactItem({ pictureUrl, name, popularity }) {
  return (
    <tr>
      <td><img className={'w-10'} src={pictureUrl} alt={name} /></td>
      <td className='w-32'>{name}</td>
      <td className='w-16'>{parseFloat(popularity).toFixed(2)}</td>
    </tr>
  )
}
