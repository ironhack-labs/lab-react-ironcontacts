import React from 'react'

function SortName(props) {
    return (
        <div>
             <button onClick={props.sortByName}>Sort By Name</button>
        </div>
    )
}

export default SortName
