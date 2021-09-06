import React from "react";
import '../contacts.json';

const Contact = () => {
    return(
        <tr>
        <td>
          <img src={''} width="80px" alt={' '} />
        </td>
        <td></td>
        <td>{''}</td>
        <td><button onClick={'deleteThis'}>DELETE</button> </td>
      </tr>
    );
};

export default Contact;