import React from 'react';

import './Contact.css';

const contact = ({ pictureUrl, name, popularity, delCon }) => (
    <tr>
        <td>
            <img className="contact-img" src={ pictureUrl } alt="Contact"/>
        </td>
        <td>
            { name }
        </td>
        <td>
            { popularity }
        </td>
        <td>
            <button onClick={ () => delCon(name) }>DELETE</button>
        </td>
    </tr>
);

export default contact;