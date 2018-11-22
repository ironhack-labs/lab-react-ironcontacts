import React from 'react';
import Button from './Button';


const Contact = ({item, pictureUrl, name, popularity, handleClick}) => (

  <tr>
    <td>{item}</td>
    <td><img src={pictureUrl} alt={name} width='50px'/></td>
    <td>{name}</td>
    <td>{popularity}</td>
    <td><Button name='removeContact' handleClick={handleClick} contactitem={item}/></td>
  </tr>
)

export default Contact;