import React from 'react'

const CharactersDisplay = ({name,pictureUrl,popularity,del})=>{
  return(
    <div className='card'>
    <img src={pictureUrl} alt="Sin imagen"/>  
    <div className='info'>
    <h2>Nombre: {name}</h2>
    <h4>Popularidad: {popularity}</h4>
    <button onClick={del}>Delete</button>
    </div>
    </div>
  )
}

export default CharactersDisplay