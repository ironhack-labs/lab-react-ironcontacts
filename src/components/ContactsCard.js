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

      )

}

export default ContactsCard;