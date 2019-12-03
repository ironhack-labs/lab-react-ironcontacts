import React from "react";


const Contact = props => {
  return (
  
    <tr>
        <td> <img src={props.pictureUrl} /> </td>
        <td>{props.name}</td>
        <td>{props.popularity}</td>
          <td><button onClick={props.deleteContact} className="btn btn-sm btn-dark">Delete</button></td>
    </tr>
    
  );
};

export default Contact;
