import React from 'react'

export default function index(props) {

    return (
        <button onClick={props.sortByPopularity} >Sort by popularity</button>
    )
}