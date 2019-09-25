import React from 'react'

const Tableitem = ({ data, removeContact }) => {
  const { name, pictureUrl, popularity } = data
  return (
    <tr>
      <td>
        <img src={pictureUrl} alt={name} style={{ width: '60px' }} />
      </td>
      <td className='align-middle'>{name}</td>
      <td className='align-middle'>{popularity}</td>
      <td className='align-middle'>
        <button className='btn btn-danger btn-sm' onClick={() => removeContact(name)}>
          Remove
        </button>
      </td>
    </tr>
  )
}

export default Tableitem
