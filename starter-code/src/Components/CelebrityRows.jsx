import React from 'react';
import { contacts } from '../contacts.js';

const CelebrityRows = ({ rows }) => {
  const rowsArr = contacts
  .slice(0, Number(rows))
  .map((e, i) => {
    const { name, pictureUrl, popularity } = e;
    return (
      <tr key={`r-${i}`}>
        <td>
          <img src={pictureUrl} alt={name} />
        </td>
        <td>{name}</td>
        <td className="tabNum">{popularity.toFixed(2)}</td>
      </tr>
    );
  });

  return [rowsArr];
};

export default CelebrityRows;
