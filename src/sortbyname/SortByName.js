import React from 'react'

export default function SortByName({ onHandler }) {
    return (
        <div>
             <button onClick={onHandler}>Sort by name</button>
        </div>
    )
}
