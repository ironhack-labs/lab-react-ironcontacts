import React from 'react'
import './ContactList.css'

export default function contactList(props) {
    return (
            <tr>
                <td><img src={props.pictureUrl} alt="facePicture" height="80px"/></td>
                <td>{props.name}</td>
                <td>{props.popularity.toFixed(2)}</td>
                <td>
                <button
              className="delete-button"
              onClick={() => {
                props.deleteFromList(props.id)
              }}>
              Delete
              </button></td>
            </tr>   
    )
}