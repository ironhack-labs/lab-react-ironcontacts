import React from 'react'

export default function RandomContact({ onHandler }) {
    return (
        <div>
            <button onClick={onHandler}>Add Random Contact</button>
        </div>
    )
}
