import React from 'react';

import './Contact.css';

const contact = ({ pictureUrl, name, popularity }) => (
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
    </tr>
);

export default contact;