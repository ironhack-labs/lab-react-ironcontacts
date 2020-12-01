import React from 'react'
import './Button.css'

const Button = ({ name, action}) => {
    return (
        <button className='button' onClick={action}>{name}</button>
    )
}

export default Button