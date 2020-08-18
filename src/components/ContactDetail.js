import React from 'react'

function ContactDetail(props){



    return (
        <div class="container">
            <img src={props.contact.pictureUrl} alt=""/>
            <p>{props.contact.name}</p>
            <p>{props.contact.popularity}</p>
            <button onClick={() => props.onDelete(props.id)}>Delete</button>
        </div>
    )
}



export default ContactDetail