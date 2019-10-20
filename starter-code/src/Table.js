import React from 'react';
import TableDataRow from './TableDataRow';

const Table = (props) => {
  return (
    <table>
      <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
      </tr>
      {props.contacts.map((elem, idx)=> {
       return <TableDataRow key={idx} name={elem.name} picture={elem.pictureUrl} pop={elem.popularity} delete={props.delete} idx={idx} />
      })}
    </table>
  );
}

export default Table;
