import React from 'react'

export default function DeleteButton( {onHandler}  ) {
    return (
        <div >
             <button onClick={onHandler}>Delete</button>
        </div>
    )
}
