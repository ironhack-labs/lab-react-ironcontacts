import React from 'react'
import './style.css'

export default function index({ children, handleOnChange }) {
    return (
        <div className="filter-bar">
            <input type="text" className="find-input" placeholder="Find Contact" onChange={handleOnChange} />
            {children}
        </div>
    )
}
