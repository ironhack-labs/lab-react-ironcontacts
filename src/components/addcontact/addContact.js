import React from 'react';

const AddContact = (props) => {
  //addRandomContact est une fonction qu'on a défini dans App.js
  return <button onClick={props.addRandomContact}>Add a Random Contact</button>;
};

export default AddContact;
