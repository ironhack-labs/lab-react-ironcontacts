import React from 'react'

export const SortByPopu = (props) => {
    return (
        <div>
            <button onClick={() => props.onClick()}>{props.children}</button> 
        </div>
    )
}
