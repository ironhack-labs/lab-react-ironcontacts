import React from 'react';
import './CelebritiesList.css';

export default function CelebritiesList(props) {
  console.log(props);
  const celebrityTR = props.celebrities.map((celebrity) => {
    return (
      <tr key={celebrity.id}>
        <th>
          <img src={celebrity.pictureUrl} alt="celebrity-pic" />
        </th>
        <th>{celebrity.name}</th>
        <th>{celebrity.popularity.toString().slice(0, 5)}</th>
      </tr>
    );
  });

  return <tbody>{celebrityTR}</tbody>;
}
