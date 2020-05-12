import React from 'react';

const Contact = (props) => {
  return (
    <tr>
      <td>
        <img className="imgContact" src={props.pictureUrl} alt="" />
      </td>
      <td>
        {' '}
        <h3>{props.name}</h3>
      </td>
      <td>
        {' '}
        <p>
          <b>{Math.floor(props.popularity)}</b>{' '}
        </p>
      <button onClick={props.delete}>Delete</button>
      </td>
    </tr>
  );
};

export default Contact;
