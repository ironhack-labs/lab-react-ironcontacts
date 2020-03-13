import React from 'react'

const EachUser = ({name, pictureUrl, popularity, id, deleteUser}) => {
    return (
        <div className='each-user'>
            <img src={pictureUrl} alt={name}/>
            <h4>{name}</h4>
            <h4>{popularity}</h4>
            <button onClick={deleteUser} className='delete-btn' id={id}>Remove</button>
        </div>
    )
}

export default EachUser
