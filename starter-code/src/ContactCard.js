import React from 'react';

const contactcard = (props) => {


  return (
    <div className="contactcard">
      <table id="contacttable">
      <tbody>
      <tr>
      <td><img src={props.picture} alt=""/></td> 
      <td>{props.name}</td>
      <td>{props.popularity}</td>
      <td><button id="deletebutton" onClick = {()=> props.deleteClickHandler()} >Delete</button></td>
      </tr>
      </tbody>
      </table>
      
      
    </div>

  )
};







export default contactcard;