import React from 'react'

const Button = props => {
    return (
        <button onClick={props.clickEvent} className={props.clase}>{props.children}</button>
    )
}

export default Button

