import React from 'react'

export const DeleteButton = (props) => {
    return (
        <div>
             <button onClick={() => props.onClick()}>{props.children}</button>
        </div>
    )
}
