import React from 'react'

function ContactsCard(props){
    const {handleDelete, contact:{name, pictureUrl, popularity, id}} = props /* the cards are children so they need to inherit info from parent element (MoviesList), therefore they need props */
    return(
        <tr>
            <td><img src={pictureUrl} alt="{pictureUrl}" /></td>
            <td>{name}</td>
            <td>{popularity}</td>
            <td><button className='btn-delete' onClick={()=> handleDelete(id)}>Delete 🗑</button></td>
        </tr>

        /* We are getting an error here because it wants each child in a list to have a unique key. To change, we need to add a key
        Here we can add a key to the opening div, we use the ID because this will always be unique, we can also use the index (idx) - best to use the id */
    )

}

export default ContactsCard