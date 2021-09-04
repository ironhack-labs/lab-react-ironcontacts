import React from "react";
import '../contacts.json';

const Contact = ({arrContacts}) => {
    return(
        <div>
        <p>display {arrContacts}</p>
        </div>
    );
};

export default Contact;