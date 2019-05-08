import React from 'react'
import 'antd/dist/antd.css'

function Button (props){
  return (
    <button onClick={props.onClick}>{props.name}</button>
  )
}

export default Button

