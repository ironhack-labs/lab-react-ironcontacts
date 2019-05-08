import React from 'react'

function Button (props) {
  return (
    <button onClick={props.onClick}>{props.name}</button>
  )
}

export default Button;