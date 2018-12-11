import React from 'react'

const Contact = ({name,pictureUrl,popularity,clickToDelete})=>{
    
    
    return(
        <tr className="home-promo-card star">
            <td><img width="100px" src={pictureUrl}/></td>
            <td><h3>{name}</h3></td>
            
            <td><p>{popularity.toFixed(2)}</p></td>
            <td><button onClick={clickToDelete}>Delete</button></td>

        </tr>

    )
}

export default Contact;