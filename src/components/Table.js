import React from 'react'

 function Table(props){
     return (   
<table>
  <tr>
    <img src={props.pictureUrl} alt="images"/>
    <th>{props.name}</th>
    <th>{props.popularity}</th>
    <button onClick={() => {props.delete(props.name)}} >OutOfHere</button>
  </tr>  
</table>
     )
 }





//calling a function inside of a function line 10, first parthensis, calling funciton on click

export default Table;