import React from 'react'
import './card-contact.css'

const ContacCard = ({ name, pictureUrl, popularity, removeContact}) => { 
    
    return (
        <article className="container">
            <div className="list-of-contacts" >
            <img src={pictureUrl} alt={name} style={{ width: '100px' }}></img>
            <h2>{name}</h2>
                <small>{popularity}</small>
                <button onClick={removeContact} className= "btn btn-sm btn-dark">Delete</button>
            </div>
        </article>
    ) 

}

export default ContacCard