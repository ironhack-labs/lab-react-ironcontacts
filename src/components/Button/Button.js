import React from 'react'

const Button = (props) => {
  return (
    <button className="btn btn-primary" onClick={() => props.func()}>
      {props.children}
    </button>
  )
}
export default Button
