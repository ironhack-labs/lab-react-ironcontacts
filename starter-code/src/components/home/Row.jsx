import React from 'react'
import Home from './Home';



const Row = ({name, pictureUrl, popularity, deleteFunc}) =>{

    return(
  <tr>
    <td> <img className='imgFamous' src={pictureUrl} alt="famousPhoto"/></td> 
    <td>{name}</td>
    <td>{popularity}</td>
    <td><button onClick={deleteFunc}>Eliminar</button></td>
  </tr>
    ) 
}

export default Row
