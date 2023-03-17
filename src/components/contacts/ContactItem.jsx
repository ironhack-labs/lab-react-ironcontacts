import React from 'react'
import trophyIcon from '../../assets/images/trophy.png'

export default function ContactItem({ pictureUrl, name, popularity, wonOscar, wonEmmy }) {

  return (
    <tr>
      <td className='text-center'><img className='w-10 m-auto' src={pictureUrl} alt={name} /></td>
      <td className='w-32'>{name}</td>
      <td className='w-16'>{parseFloat(popularity).toFixed(2)}</td>
      <td className='w-32'>{wonOscar && <img className='w-8 m-auto' src={trophyIcon} alt="trophy" />}</td>
      <td className='w-32'>{wonEmmy && <img className='w-8 m-auto' src={trophyIcon} alt="trophy" />}</td>
    </tr>
  )
}
