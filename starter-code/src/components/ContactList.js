import React from 'react'
import Contact from './Contact'

const ContactList = ({contacts}) => {

  const list = contacts.map( (item, i) => {
    return ( 
        <Contact contact={item} key={i}/>
    )
})

const firstFive = list.splice(0,5)

  return (
    <div>
      <div className="contacts-list">
        <div className="contact-image"><h2>Picture</h2></div>
        <div className="contact-name"><h2>Name</h2></div>
        <div className="contact-popularity"><h2>Popularity</h2></div>
      </div>
      <div>{firstFive}</div>
    </div>
  )
}

export default ContactList