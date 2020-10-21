import React from 'react'

export default function SortByPopularity({ onHandler }) {
    return (
        <div>
              <button onClick={onHandler}>Sort by popularity</button>
        </div>
    )
}
