import React from 'react';
import styled from 'styled-components';

const Avatar = styled.img`
  width: 150px;
`;

const ContactRow = ({ id, pictureUrl, name, popularity, handleDelete }) => (
  <tr>
    <td>
      <Avatar src={pictureUrl} alt={name} />
    </td>
    <td>{name}</td>
    <td>{popularity.toFixed(2)}</td>
    <td>
      <button onClick={() => handleDelete(id)}>Delete</button>
    </td>
  </tr>
);

export default ContactRow;
