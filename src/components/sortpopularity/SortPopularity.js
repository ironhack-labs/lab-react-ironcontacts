import React from 'react'

function SortPopularity(props) {
    return (
        <div>
         <button onClick={props.sortByPopularity}>Sort By Popularity</button>
        </div>
    )
}

export default SortPopularity
