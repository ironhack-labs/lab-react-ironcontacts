import React from 'react'

export default function Actor(props) {
    return (
        <div className='actor'>
            <img src={props.img}></img>
            <h2>{props.name}</h2>
            <h2>{props.popularity}</h2>
            <button onClick={props.delete}>Delete</button>
        </div>
    )
}
