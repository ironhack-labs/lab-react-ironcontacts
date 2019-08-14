import React from 'react'

const Card = ({ name, pictureUrl, popularity, deleteContact }) => {
    console.log(name, pictureUrl, popularity)
    return(  
      
  <tr>
       <td> <img src={pictureUrl} alt={name}></img> </td> 
       <td> {name} </td>
       <td> {popularity} </td> 
       <td> <button className="btn btn-danger" onClick={deleteContact}>Delete</button> </td>
    </tr>
  )
}
export default Card