import React  from 'react';

import Contact from './Contact';

const ContactList = (props) => {
  console.log(props);
  const newcontact = Object.values(props.contact)
  return(
  <tbody>
    {props.contact.map((c, idx) => <Contact delete ={props.delete} key = {idx} pictureUrl={c.pictureUrl} name={c.name} popularity={c.popularity}/>)}
    </tbody>
  );
  

}
export default ContactList;