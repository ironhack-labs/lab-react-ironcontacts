import React from 'react'

const DeleteButton = ({ onDelete, id }) => {
  return (
    <button onClick={() => onDelete(id)} >
      Delete
    </button>
  )
}

export default DeleteButton
