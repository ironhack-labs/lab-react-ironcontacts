import React from 'react'

const Container = (contact) => {
  return (
    <div key={contact.name}>
      <img src={contact.pictureUrl} alt={contact.name} />
      <p>{contact.name}</p>
      <p>{contact.popularity}</p>
    </div>
  )
}
export default Container
