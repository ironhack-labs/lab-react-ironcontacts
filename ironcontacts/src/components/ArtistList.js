import React from 'react'
import './ArtistList.css'


const ArtistList = ({name, pictureUrl, popularity, removeContact}) => {
    



        return (
        <tr>
            <td><img src={pictureUrl} alt= {name}></img></td>
            <td>{name}</td>
            <td>{popularity}</td>
            <td><button onClick={removeContact}>Eliminar</button></td>
        </tr>)
    


}


export default ArtistList