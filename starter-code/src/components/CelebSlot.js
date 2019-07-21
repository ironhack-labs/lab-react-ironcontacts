import React from 'react'

export default function CelebSlot(props) {
  console.log(props)

  const { contact, index, delCeleb } = props

  return (
    <div
      style={{
        display: 'flex',
        width: '30vw',
        justifyContent: 'space-between'
      }}
    >
      <img style={{ width: '50px' }} src={contact.pictureUrl} alt={contact.name} />
      <p>{contact.name}</p>
      <p>{contact.popularity}</p>
      <button onClick={() => delCeleb(index)}>Delete</button>
    </div>
  )
}
