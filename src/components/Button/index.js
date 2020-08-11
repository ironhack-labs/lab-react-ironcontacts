import React from 'react'
import './style.css'

export default function index({ handlerClickEvent, text }) {

    return (
        <button className='primary' onClick={handlerClickEvent}>
            {text}
        </button>
    )
}