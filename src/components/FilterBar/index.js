import React from 'react'
import './style.css'

export default function index({ children }) {
    return (
        <div className="filter-bar">
            {children}
        </div>
    )
}
