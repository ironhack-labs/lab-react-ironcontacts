import React from 'react'
import './style.css'

export default function index({ contact }) {
    const { pictureUrl, name, popularity } = contact
    return (
        <tr>
            <td>
                <img className='table-img' src={pictureUrl} alt="User" />
            </td>
            <td className='table-name'>{name}</td>
            <td className='table-popularity'>{popularity.toFixed(2)}</td>
        </tr>
    )
}
