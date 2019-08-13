import React from 'react'

const Card = ({ name, pictureUrl, popularity, deleteContact }) => {
    console.log(name, pictureUrl, popularity)
    return(  

  <tr>
       <td> <img className="images" src={pictureUrl} alt={name}></img> </td> 
       <td><p className="texto1"> {name} </p> </td>
       <td><p className="texto1"> {popularity} </p>  </td> 
       <td> <button className = "btn btn-boton"  onClick={deleteContact}>Delete</button> </td>
    </tr>
  )
}
export default Card 


