import React from 'react'

export default function CelebrityDetail(props) {
    return (
        <div>
            
            <button onClick={() => {props.deleteHandler(props.detail.id)}}>Delete</button>
        </div>
    )
}
