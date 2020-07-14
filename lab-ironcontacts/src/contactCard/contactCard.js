import React from 'react'
import './contactCard.css'

const Contactcard = ({pictureUrl, name, popularity, removeContact}) => {

        return (
            <tr>
                <th><img src={pictureUrl} alt="contPic"/></th>
                <th>{name}</th> 
                <th>{popularity.toFixed(2)}</th>
                <th><button onClick={removeContact}>Remove contact</button></th>
            </tr>
        )    
 }

 export default Contactcard