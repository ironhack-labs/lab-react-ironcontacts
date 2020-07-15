import React from 'react'
import './style.css'

export default function index({ handlerClickEvent, text }) {
    const handleClick = () => {
        return handlerClickEvent()
    }
    return (
        <button className='primary' onClick={() => handleClick()}>
            {text}
        </button>
    )
}
