import React from 'react';
import Contact from './Contact';


const ContactList = (props) => {

  const fiveContacts = props.contacts.splice(0,5)

  return (
    <table className='table'>
      <thead>
        <tr>
          <th scope="col">Picture</th>
          <th scope="col">Name</th>
          <th scope="col">Popularity</th>
        </tr>
      </thead>
        {
          fiveContacts.map((elemento, index) => {
          return <Contact data={elemento} key={index}/>
          })
        }
    </table>
  )
}
export default ContactList


/*
  const fiveContacts = props.contacts.map((element) => {
    console.log(element.name)
  })

  */