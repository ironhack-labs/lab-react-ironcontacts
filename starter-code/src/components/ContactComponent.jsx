import React from  'react'

import ContactItem from './ContactItem'

export default function ContactComponent(props) {
    return (
        <div>
            <table>
            <thead>
                <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>
                </tr>
            </thead>
            <tbody className='contact-table'>
                {props.contacts.map( (contact, index) =>  
                <ContactItem key={index}
                  name = {contact.name}
                  picture = {contact.pictureUrl}
                  popularity = {contact.popularity}/> )
                }
            </tbody>


                
               
            </table>
        </div>
    )
}
