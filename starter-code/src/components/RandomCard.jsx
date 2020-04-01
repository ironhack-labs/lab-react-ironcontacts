import React from 'react';

function RandomCard(props) {
  return (
    (
      <tr>
          <td>
              <img src={props.random} alt="" />
          </td>
          <td>{props.random}</td>
          <td>{props.random}</td>
    </tr>
    )
  );
}

export default RandomCard;
