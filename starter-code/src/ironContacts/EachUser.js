import React from 'react'
import Rating from '../rating/Rate'

const EachUser = ({name, pictureUrl, popularity, id, stars, deleteUser}) => {
    // console.log("Output for: EachUser -> stars", stars)
    return (
        <div className='each-user'>
            <img src={pictureUrl} alt={name}/>
            <h4>{name}</h4>
            <div>
                <h4>{Math.round(popularity)}</h4>
                <h4> <Rating rate={stars}/> </h4>
            </div>
            <button onClick={()=> deleteUser({id})} className='delete-btn' id={id}>Remove</button>
        </div>
    )
}

export default EachUser
