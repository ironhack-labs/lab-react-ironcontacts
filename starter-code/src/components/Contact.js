import React from 'react'

function Contact({ contacts, handleDelete }){
  return (
    contacts.map((contact, i) => {
      return (
        <div key={i} className="contact">
          <img src={contact.pictureUrl} alt={contact.name}/>
          <h4>{contact.name}</h4>
          <p>{contact.popularity.toFixed(2)}</p>
          <button onClick={() => handleDelete(i)}>Delete</button>
        </div>
      )
    })
  )
}

export default Contact