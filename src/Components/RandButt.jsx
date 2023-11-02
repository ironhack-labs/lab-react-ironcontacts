import React from "react";

let RandButt = (props) => {
  let method = props.method;
  let array = props.array;
  let contacts = props.contacts;

  const addRandom = () => {
    const rIndex = Math.floor(Math.random() * (array.length));
    const newContact=array[rIndex];
    let newContacts = [...contacts, newContact]
    
    if(newContacts.length<=array.length){
    if(!contacts.some(contact => contact.id === newContact.id) && newContacts.length<52){
        newContacts = [...contacts, newContact]
        method(newContacts);}
    else{
        console.log("Contact Exists, repeating")
        addRandom()}
    console.log(array.length)
    console.log(newContacts.length)}
    else{console.log("nope")}
  };

  return (
    <button className="rnd-btn" onClick={addRandom}>
      Uno Mas!
    </button>
  );
};

export default RandButt;