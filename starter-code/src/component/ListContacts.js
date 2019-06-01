import React from 'react';
import RowContacts from './RowContact';

const ListContacts = ({ choosenContacts, deleteContact }) => (
  <div>
    <table className="table w-50 mx-auto">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Picture</th>
          <th scope="col">Name</th>
          <th scope="col">Popularity</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {choosenContacts.map((contact, i) => (<RowContacts contact={contact} key={i} deleteContact={deleteContact}/>))}
      </tbody>
    </table>
  </div>
)

export default ListContacts


  