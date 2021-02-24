import React from 'react'

export default function ContactsList(props) {
    

    const list = props.contacts.map(contact => {
        
        return (
            // the key prop has to be added - otherwise React will warn you - you should not use the index
            // but an id
            <div>
                <h2>{contact.name}</h2>
                <p>{contact.popularity}</p>
               
            </div>
        )
    })
    return (
        <div>
            {list}
        </div>
    )
}