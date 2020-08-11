import React from 'react'

export const RandomButton = (props) => {

    return (
        <button onClick={() => props.onClick()}>{props.children}</button>    
    )
}
