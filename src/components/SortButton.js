import React from 'react'

function SortButton(props) {
    return <button onClick={() => props.sort(props.sortBy)} className="btn">{props.children}</button>
}

export default SortButton;