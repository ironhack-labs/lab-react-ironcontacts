import React from 'react';
import ContactRow from '../ContactRow/ContactRow';

const Table = (props) => {
    return (
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
        </thead>
        <tbody>
          {
            props.contactList.map((e, idx) => {
              return <ContactRow onClick={props.onClick}fn={e} key={idx} />
          })
          }
        </tbody>
       </table>
    )
}

export default Table;
