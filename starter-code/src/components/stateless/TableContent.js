import React, {Component} from 'react'


const TableContent = props => {
  



  return (
  <tr>
  
        <th><img src={props.pictureUrl}/></th>
        <th>{props.name}</th>
        <th>{props.popularity}</th>
        <th><button onClick={props.delete}>Delete</button></th>
  
  </tr>
)

}



export default TableContent

