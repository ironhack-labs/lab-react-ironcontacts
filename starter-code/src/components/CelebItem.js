import React from 'react';
// import contacts from '../contacts.json'
import { Button } from 'reactstrap';


const CelebItem = ({ blah, deleteItem }) => {

  return (
    <tr>
      <td><img src={blah.pictureUrl} width="100" height="150" alt="" /> </td>
      <td>{blah.name}</td>
      <td>{blah.popularity}</td>
      <td><Button color="danger" onClick={deleteItem}> Delete</Button></td>
    </tr >
  )
}

export default CelebItem;