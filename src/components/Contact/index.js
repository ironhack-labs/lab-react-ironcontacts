import React from 'react'
import Button from '../Button'
import './style.css'

export default function index({ contact, handleClick }) {
    const { pictureUrl, name, popularity, id } = contact
    return (
        <tr>
            <td>
                <img className='table-img' src={pictureUrl} alt="User" />
            </td>
            <td className='table-name'>{name}</td>
            <td className='table-popularity'>
                {popularity?.toFixed(2)}
                <span className='button-delete'>
                    <Button text="Delete" handlerClickEvent={() => handleClick(id)} />
                </span>
            </td>
        </tr>
    )
}
