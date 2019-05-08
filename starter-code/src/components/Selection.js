import React from 'react'

function Selection({ handleClick }) {
    return (
        <div>
            <button onClick={handleClick} name='rand' >Add Random Contact</button>
            <button onClick={handleClick} name='sortname' >Sort by name</button>
            <button onClick={handleClick} name='sortpopularity' >Sort by popularity</button>
        </div>
    )
}

export default Selection