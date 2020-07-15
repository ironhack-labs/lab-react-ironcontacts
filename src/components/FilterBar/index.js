import React from 'react'
import './style.css'

export default function index({ children, handleOnChange }) {
    return (
        <div className="filter-bar">
            <input type="text" placeholder="Find Contact" onChange={handleOnChange} />
            {children}
        </div>
    )
}
