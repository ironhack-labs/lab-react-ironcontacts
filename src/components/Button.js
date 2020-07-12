import React from 'react'

export default function Button(props) {
    return (
        <div>
            <button onClick={props.addContact}>Add a random contact</button>
        </div>
    )
}


