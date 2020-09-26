import React from 'react'
import '../stylesheets/Button.css'


export default function Button (props) {
    return <button className="btn" onClick={props.event}>{props.children}</button>
}