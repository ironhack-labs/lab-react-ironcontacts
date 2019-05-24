import React from 'react';
import Contacts from './Contacts';

const ContactList = (props) => {
    const list = props.contact.map((contact, i) => (
      <div className="col-4 mb-4" key={i}>
        <Contacts contact={contact}/>
      </div>
    ))
  
    return (
      <div className="ContactList">
        <div className="row">
        <button onClick={()=>props.addRandomContact(Math.random())}>
        Add Ramdom Contact
        </button>
        <button onClick={()=>props.sortByName()}>
        Sort by name
        </button> 
        <button onClick={()=>props.sortByPopularity()}>
        Sort by popularity
        </button>   
          {list}        
        </div>
      </div>
    );
  }
  
  export default ContactList