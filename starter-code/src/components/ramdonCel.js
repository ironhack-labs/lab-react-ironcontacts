import React from 'react'
import Button from './Button'

function Row (props) {
  console.log('########', props)
  return ( 
    <tr>
      <td><img src={props.data.pictureUrl} width="100px"/></td>
      <td>{props.data.name}</td>
      <td>{props.data.popularity}</td>
      <td><Button name="Delete" onClick={props.deleteCelebrity} /></td>
    </tr>
  )

}

export default Row;
