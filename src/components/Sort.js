import React from 'react'

export default function Sort(props){
    return <div>
    <button onClick={props.onSortName}>Sort by Name</button>
    <button onClick={props.onSortPop}>Sort by Popularity</button>
    </div>
}