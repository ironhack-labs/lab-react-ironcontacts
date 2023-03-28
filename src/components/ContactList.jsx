import React from 'react'

function ContactList({ name, pictureUrl, popularity, wonOscar, wonEmmy, onClickDelete}) {

  let roundPopularity = (Math.round(popularity * 100) / 100).toFixed(2)
  let hasOscar = ''
  let hasEmmy = ''

  if (wonOscar) {
    hasOscar = '🏆'
  }
  if (wonEmmy) {
    hasEmmy = '🏆'
  }
  return (
    <tr>
      <td><img src={pictureUrl} alt={name} height='150' /></td>
      <td className='px-3'>{name}</td>
      <td className='px-3'>{roundPopularity}</td>
      <td className='px-3'>{hasOscar}</td>
      <td className='px-3'>{hasEmmy}</td>
      <td className='px-3'><button onClick={onClickDelete}>Delete</button></td>
    </tr>
  )
}

export default ContactList