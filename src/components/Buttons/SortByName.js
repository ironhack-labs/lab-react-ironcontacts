import React from 'react'

export const SortByName = (props) => {
    return (
        <div>
             <button onClick={() => props.onClick()}>{props.children}</button> 
        </div>
    )
}
