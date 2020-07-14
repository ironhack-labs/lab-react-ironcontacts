import React from 'react'
import './button.css'


const Button = ({ onClick, className, title }) => {
    return (
        <button type="button" onClick={onClick} className={className}>{title}</button>
    )
}

export default Button