import React from 'react'

export default function ContactItem({ pictureUrl, name, popularity, wonOscar, wonEmmy, onDelete }) {

  return (
    <tr>
      <td className='text-center'><img className='w-10 m-auto' src={pictureUrl} alt={name} /></td>
      <td className='w-32'>{name}</td>
      <td className='w-16'>{parseFloat(popularity).toFixed(2)}</td>
      <td className='w-32'>{wonOscar && <span>🏆</span>}</td>
      <td className='w-32'>{wonEmmy && <span>🏆</span>}</td>
      <td className='w-32'><button onClick={onDelete} className='border border-black px-3 bg-slate-200'>Delete</button></td>
    </tr>
  )
}
