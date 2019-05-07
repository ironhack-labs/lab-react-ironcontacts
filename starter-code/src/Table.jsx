import React from 'react';
import ContactCard from './ContactCard/ContactCard';

const Table = (props) => {
  console.log('É Araaaayyyyyyy, mano?', props.contactList);
    return (
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
        </thead>
        <tbody>
          {
            props.contactList.map((e, idx) => {
              return <ContactCard fn={e} key={idx} />
          })
          }
        </tbody>
       </table>
    )
}

export default Table;
