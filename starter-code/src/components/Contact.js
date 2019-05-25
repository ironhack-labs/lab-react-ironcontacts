import React from 'react';

const Contact = (props) => {
  
  return (
    <tbody>
      <tr>
        <td><img className="img-fluid img-thumbnail" src={props.data.pictureUrl}/></td>
        <td>{props.data.name}</td>
        <td>{props.data.popularity}</td>
      </tr>
    </tbody>
  )
}

export default Contact