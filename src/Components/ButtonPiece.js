import React from 'react'

export const ButtonPiece = (props) => {
    return (
        <div>
            <button onClick={() => props.onClick()}>{props.children}</button> 
        </div>
    )
}
