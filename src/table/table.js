import React from 'react';
import Row from '../row/row'
import './table.css';

function Table({contacts,deleteContact}) {
    const rows = contacts.map((el,idx) =>{
        return (<Row name={el.name} popularity={el.popularity} picture={el.pictureUrl} deleteContact={deleteContact} idx={idx}/>)
    })

  return (
    <div className='table'>
        <table>
        <tbody>
            <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>Action</th>
            </tr>
            {rows}
        </tbody>
        </table>    
    </div>
  );
}

export default Table;
