import React from 'react'
import './Button.css'

export default function Button( props) {
    console.log(props)
    return (
        <div className='button'>
            <button onClick={props.onHandler}>{props.children}</button>
        </div>
    )
}
