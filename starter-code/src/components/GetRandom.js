import React from 'react'

export default function GetRandom(props) {
    return (
        <div>
            <button onClick={props.click}>{props.children}</button>
        </div>
    )
}
